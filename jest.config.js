module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  testMatch: ['**/*.test.ts(x)?'],
  collectCoverage: false,
  collectCoverageFrom: ['src/**/*.ts(x)'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  moduleNameMapper: {
    '@renderer': '<rootDir>/.jest/renderer.tsx',
    '\\.svg': '<rootDir>/.jest/mocks.ts',
  },
}
