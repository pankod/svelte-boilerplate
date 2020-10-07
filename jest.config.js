module.exports = {
    testMatch: ['**/*.(test|spec).js'],
	transform: {
		'^.+\\.js$': '<rootDir>/jest.transform.js',
		'^.+\\.svelte$': 'jest-transform-svelte'
	},
	moduleFileExtensions: ['js', 'svelte'],
	bail: false,
	moduleNameMapper: {
		'^@([A-Z].*)$': '<rootDir>/src/$1'
	},
	setupFilesAfterEnv: [
		"<rootDir>/jest.setup.js"
	]
};