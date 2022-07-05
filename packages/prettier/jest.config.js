module.exports = {
  transform: {
    '^.+\\.ts$': 'esbuild-jest',
  },
  testPathIgnorePatterns: ['/node_modules/', '/__fixtures__/'],
  collectCoverageFrom: ['src', '!**/__tests__/**', '!**/*.spec.*'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
};
