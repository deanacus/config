const { resolve } = require('path');
const readPkg = require('read-pkg-up');

pkg = readPkg({ cwd: resolve(process.cwd()) });

const allDependencies = [
  ...Object.keys(pkg.dependencies ?? {}),
  ...Object.keys(pkg.devDependencies ?? {}),
  ...Object.keys(pkg.peerDependencies ?? {}),
];

const hasDependency = (dependency) => allDependencies.includes(dependency);

module.exports = {
  hasDependency,
};
