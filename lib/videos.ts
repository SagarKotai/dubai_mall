/**
 * Client-facing video sources.
 *
 * Each source points to an internal Next.js API route that runs on Vercel
 * serverless functions. The route resolves an authenticated Pexels stream URL
 * server-side and falls back to a stable public CDN link if needed.
 */

export const VIDEO_FALLBACKS = {
  skyline:
    'https://videos.pexels.com/video-files/33024009/14075716_1920_1080_30fps.mp4',
  hero:
    'https://videos.pexels.com/video-files/34312419/14535950_1920_1080_60fps.mp4',
  interior:
    'https://videos.pexels.com/video-files/4750090/4750090-hd_1920_1080_25fps.mp4',
  attractions:
    'https://videos.pexels.com/video-files/34529274/14629594_1920_1080_60fps.mp4',
  dining:
    'https://videos.pexels.com/video-files/5223106/5223106-hd_1920_1080_25fps.mp4',
  events:
    'https://videos.pexels.com/video-files/13082773/13082773-hd_1920_1080_60fps.mp4',
} as const;

export type VideoSlot = keyof typeof VIDEO_FALLBACKS;

export const VIDEOS: Record<VideoSlot, string> = {
  skyline: '/api/media/video/skyline',
  hero: '/api/media/video/hero',
  interior: '/api/media/video/interior',
  attractions: '/api/media/video/attractions',
  dining: '/api/media/video/dining',
  events: '/api/media/video/events',
};
