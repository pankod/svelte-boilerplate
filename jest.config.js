module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ['**/*.(test|spec).ts'],
  transform: {
    '^.+\\.ts$': 'babel-jest',
    '^.+\\.svelte$': 'jest-transform-svelte',
  },
  moduleFileExtensions: ['js', 'ts', 'svelte'],
  bail: false,
  moduleNameMapper: {
    '^@([A-Z].*)$': '<rootDir>/src/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/mocks.ts',
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.jest.json',
      babelConfig: true,
      diagnostics: false,
    },
  },
};
