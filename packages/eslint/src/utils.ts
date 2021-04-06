import { resolve } from 'path';
import readPkg from 'read-pkg-up';

const pkg = readPkg.sync({ cwd: resolve(process.cwd()) });

const allDependencies = [
  ...Object.keys(pkg?.packageJson.dependencies ?? {}),
  ...Object.keys(pkg?.packageJson.devDependencies ?? {}),
  ...Object.keys(pkg?.packageJson.peerDependencies ?? {}),
];

export const hasDependency = (dependency: string): boolean =>
  allDependencies.includes(dependency);

export const hasReact = hasDependency('react');
export const hasTypescript = hasDependency('react');
export const hasJest = hasDependency('react');
