import { resolve } from 'path';
import { readPackageUpSync } from 'read-pkg-up';

const pkg = readPackageUpSync({ cwd: resolve(process.cwd()) });

const allDependencies = [
  ...Object.keys(pkg?.packageJson.dependencies ?? {}),
  ...Object.keys(pkg?.packageJson.devDependencies ?? {}),
  ...Object.keys(pkg?.packageJson.peerDependencies ?? {}),
];

const hasDependency = (dependency: string): boolean =>
  allDependencies.includes(dependency);

export const hasReact = hasDependency('react');
export const hasTypescript = hasDependency('typescript');
export const hasJest = hasDependency('jest');
