const { existsSync } = require('node:fs');
const { spawnSync } = require('node:child_process');

function run(command, args, options = {}) {
  return spawnSync(command, args, {
    stdio: options.stdio || 'inherit',
    shell: false,
  });
}

if (!existsSync('.git')) {
  console.log('[lfs] No .git directory found. Skipping git lfs pull.');
  process.exit(0);
}

const gitCheck = run('git', ['--version'], { stdio: 'ignore' });
if (gitCheck.status !== 0) {
  console.log('[lfs] git is unavailable. Skipping git lfs pull.');
  process.exit(0);
}

const lfsCheck = run('git', ['lfs', 'version'], { stdio: 'ignore' });
if (lfsCheck.status !== 0) {
  console.log('[lfs] git-lfs is unavailable. Skipping git lfs pull.');
  process.exit(0);
}

console.log('[lfs] Pulling LFS assets for public/*.mp4 ...');
const pull = run('git', ['lfs', 'pull', '--include=public/*.mp4', '--exclude=']);

if (pull.status !== 0) {
  console.warn('[lfs] git lfs pull failed. Continuing build with existing files.');
}
