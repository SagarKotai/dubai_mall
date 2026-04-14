/**
 * Prebuild script: pulls Git LFS assets before `next build`.
 *
 * On Vercel (and other CI environments), the repo is cloned without LFS.
 * We authenticate git with a GitHub PAT (GH_PAT env var) so that
 * `git lfs pull` can download the actual video files from GitHub LFS storage.
 *
 * Set GH_PAT in Vercel → Project Settings → Environment Variables.
 * The token needs: repo (or at minimum: read:repo contents) scope.
 */

const { existsSync } = require('node:fs');
const { spawnSync } = require('node:child_process');

function run(cmd, args, opts = {}) {
  const result = spawnSync(cmd, args, { stdio: opts.stdio || 'inherit', shell: false });
  return result;
}

// ── 1. Must be a git repo ────────────────────────────────────────────────────
if (!existsSync('.git')) {
  console.log('[lfs] No .git directory — skip.');
  process.exit(0);
}

// ── 2. git must be present ───────────────────────────────────────────────────
if (run('git', ['--version'], { stdio: 'ignore' }).status !== 0) {
  console.log('[lfs] git is unavailable — skip.');
  process.exit(0);
}

// ── 3. git-lfs must be present ───────────────────────────────────────────────
if (run('git', ['lfs', 'version'], { stdio: 'ignore' }).status !== 0) {
  console.log('[lfs] git-lfs is unavailable — skip.');
  process.exit(0);
}

// ── 4. Inject GitHub credentials if GH_PAT is provided ──────────────────────
const pat = process.env.GH_PAT;
if (pat) {
  console.log('[lfs] GH_PAT found — configuring LFS authentication...');

  // Tell git to use the token for the GitHub LFS endpoint
  const lfsUrl = `https://${pat}@github.com/SagarKotai/dubai_mall.git/info/lfs`;
  run('git', ['config', '--local', 'lfs.url', lfsUrl], { stdio: 'ignore' });

  // Also set the global credential helper so regular git operations work
  run('git', ['config', '--local', 'credential.helper', ''], { stdio: 'ignore' });

  // Provide credentials via the insteadOf URL rewrite so git fetches also work
  run(
    'git',
    ['config', '--local', `url.https://${pat}@github.com/.insteadOf`, 'https://github.com/'],
    { stdio: 'ignore' }
  );
} else {
  console.log('[lfs] GH_PAT not set — attempting unauthenticated LFS pull (may fail on CI).');
}

// ── 5. Pull the actual video files ──────────────────────────────────────────
console.log('[lfs] Pulling LFS assets for public/*.mp4 …');
const pull = run('git', ['lfs', 'pull', '--include=public/*.mp4', '--exclude=']);

if (pull.status !== 0) {
  // Hard-fail so Vercel surfaces the error instead of silently deploying broken pointers.
  console.error('[lfs] ❌ git lfs pull FAILED. Videos will not display in production.');
  console.error('[lfs]    Make sure GH_PAT is set in Vercel → Project → Environment Variables.');
  process.exit(1);
}

console.log('[lfs] ✅ LFS pull complete — videos are ready for build.');
