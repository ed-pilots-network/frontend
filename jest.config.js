const nextJest = require('next/jest');
const path = require('path');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  testMatch: [
    '<rootDir>/tests/jest/*.test.+(ts|tsx|js)',
    '<rootDir>/app/**/**/*.test.+(ts|tsx|js)',
  ],
  moduleNameMapper: {
    '^@/lib/commodity-list$': path.join(
      __dirname,
      'app/_lib/commodity-list.ts',
    ),
  },
};

// createJestConfig is exported this way to ensure that next/jest can load the Next.js config which is async
module.exports = createJestConfig(customJestConfig);
