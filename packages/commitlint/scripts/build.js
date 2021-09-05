const { build } = require('esbuild');

const buildOptions = {
  bundle: true,
  entryPoints: ['./src/index.ts'],
  format: 'cjs',
  outfile: './dist/index.js',
  platform: 'node',
  write: true,
};

const main = async () => {
  await build(buildOptions);
};

main();
