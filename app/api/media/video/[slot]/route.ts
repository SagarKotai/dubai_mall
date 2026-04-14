import { NextResponse } from 'next/server';
import { VIDEO_FALLBACKS, type VideoSlot } from '@/lib/videos';

type RouteContext = {
  params: Promise<{ slot: string }> | { slot: string };
};

type PexelsVideoFile = {
  file_type?: string;
  quality?: string;
  width?: number | null;
  link?: string;
};

type PexelsVideoResponse = {
  video_files?: PexelsVideoFile[];
};

const SLOT_TO_VIDEO_ID: Record<VideoSlot, number> = {
  skyline: 33024009,
  hero: 34312419,
  interior: 4750090,
  attractions: 34529274,
  dining: 5223106,
  events: 13082773,
};

const CACHE_TTL_MS = 12 * 60 * 60 * 1000;
const resolvedUrlCache = new Map<VideoSlot, { url: string; expiresAt: number }>();

const PROXY_HEADER_ALLOWLIST = [
  'content-type',
  'content-length',
  'content-range',
  'accept-ranges',
  'etag',
  'last-modified',
] as const;

function isVideoSlot(value: string): value is VideoSlot {
  return Object.prototype.hasOwnProperty.call(VIDEO_FALLBACKS, value);
}

function selectBestMp4(videoFiles: PexelsVideoFile[]): string | null {
  const mp4Files = videoFiles.filter(
    (file) => file.file_type === 'video/mp4' && typeof file.link === 'string' && file.link.length > 0
  );

  if (mp4Files.length === 0) return null;

  const nearFullHd = mp4Files
    .filter((file) => typeof file.width === 'number' && file.width >= 1200)
    .sort(
      (a, b) =>
        Math.abs((a.width ?? 1920) - 1920) - Math.abs((b.width ?? 1920) - 1920)
    );

  if (nearFullHd[0]?.link) return nearFullHd[0].link;

  const largest = [...mp4Files].sort((a, b) => (b.width ?? 0) - (a.width ?? 0));
  return largest[0]?.link ?? null;
}

async function resolveFromPexels(slot: VideoSlot): Promise<string | null> {
  const apiKey = process.env.PEXELS_API_KEY;
  if (!apiKey) return null;

  const id = SLOT_TO_VIDEO_ID[slot];
  const endpoints = [
    `https://api.pexels.com/v1/videos/videos/${id}`,
    `https://api.pexels.com/v1/videos/${id}`,
  ];

  for (const endpoint of endpoints) {
    try {
      const response = await fetch(endpoint, {
        headers: { Authorization: apiKey },
        next: { revalidate: 60 * 60 * 24 },
      });

      if (!response.ok) continue;

      const payload = (await response.json()) as PexelsVideoResponse;
      const selected = selectBestMp4(payload.video_files ?? []);
      if (selected) return selected;
    } catch {
      // Try fallback endpoint or fallback URL.
    }
  }

  return null;
}

async function resolveVideoUrl(slot: VideoSlot): Promise<string> {
  const cached = resolvedUrlCache.get(slot);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.url;
  }

  const resolved = (await resolveFromPexels(slot)) ?? VIDEO_FALLBACKS[slot];

  resolvedUrlCache.set(slot, {
    url: resolved,
    expiresAt: Date.now() + CACHE_TTL_MS,
  });

  return resolved;
}

function isPlayableStatus(status: number): boolean {
  return status >= 200 && status < 300;
}

async function fetchAndProxy(
  request: Request,
  targetUrl: string,
  method: 'GET' | 'HEAD'
): Promise<Response | null> {
  const upstreamHeaders = new Headers();
  const range = request.headers.get('range');
  if (range) upstreamHeaders.set('Range', range);

  let upstream: Response;
  try {
    upstream = await fetch(targetUrl, {
      method,
      headers: upstreamHeaders,
      cache: 'no-store',
    });
  } catch {
    return null;
  }

  if (!isPlayableStatus(upstream.status)) {
    return null;
  }

  const responseHeaders = new Headers();
  for (const headerName of PROXY_HEADER_ALLOWLIST) {
    const value = upstream.headers.get(headerName);
    if (value) responseHeaders.set(headerName, value);
  }

  responseHeaders.set(
    'Cache-Control',
    'public, s-maxage=43200, stale-while-revalidate=86400'
  );

  return new Response(method === 'HEAD' ? null : upstream.body, {
    status: upstream.status,
    headers: responseHeaders,
  });
}

export async function GET(request: Request, context: RouteContext) {
  const { slot } = await context.params;

  if (!isVideoSlot(slot)) {
    return NextResponse.json(
      {
        error: 'Unknown video slot.',
        allowed: Object.keys(VIDEO_FALLBACKS),
      },
      { status: 404 }
    );
  }

  const target = await resolveVideoUrl(slot);
  const candidates = target === VIDEO_FALLBACKS[slot]
    ? [target]
    : [target, VIDEO_FALLBACKS[slot]];

  for (const candidate of candidates) {
    const proxied = await fetchAndProxy(request, candidate, 'GET');
    if (proxied) return proxied;
  }

  return NextResponse.json(
    { error: 'Unable to stream requested video source.' },
    { status: 502 }
  );
}

export async function HEAD(request: Request, context: RouteContext) {
  const { slot } = await context.params;

  if (!isVideoSlot(slot)) {
    return NextResponse.json(
      {
        error: 'Unknown video slot.',
        allowed: Object.keys(VIDEO_FALLBACKS),
      },
      { status: 404 }
    );
  }

  const target = await resolveVideoUrl(slot);
  const candidates = target === VIDEO_FALLBACKS[slot]
    ? [target]
    : [target, VIDEO_FALLBACKS[slot]];

  for (const candidate of candidates) {
    const proxied = await fetchAndProxy(request, candidate, 'HEAD');
    if (proxied) return proxied;
  }

  return NextResponse.json(
    { error: 'Unable to inspect requested video source.' },
    { status: 502 }
  );
}
