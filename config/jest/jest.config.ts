import path from 'path';

export default {
  clearMocks: true,
  coveragePathIgnorePatterns: [
    '\\\\node_modules\\\\',
  ],
  globals: {
    IS_DEV: true,
  },
  moduleDirectories: [
    'node_modules',
    'src',
  ],
  moduleFileExtensions: [
    'js',
    'jsx',
    'ts',
    'tsx',
    'json',
    'node',
  ],
  moduleNameMapper: {
    '\\.s?css$': 'identity-obj-proxy',
    '\\.svg': path.resolve(__dirname, 'jestEmptyComponent.tsx'),
    'entities/(.*)': '<rootDir>/src/entities/$1',
  },
  rootDir: '../../',
  roots: [
    'src',
  ],
  setupFilesAfterEnv: [
    '<rootDir>config/jest/setupTests.ts',
  ],
  testEnvironment: 'jsdom',
  testMatch: [
    '<rootDir>src/**/*(*.)@(spec|test).[tj]s?(x)',
  ],
};
