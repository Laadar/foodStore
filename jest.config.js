module.exports = {
    setupFilesAfterEnv: ['<rootDir>/setUpTests.js'],
    moduleFileExtensions: ['scss', 'ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    moduleNameMapper: {
        '^.+\\.(css|less|scss)$': 'babel-jest',
        '^@/(.*)$': '<rootDir>/src/$1'
    },
    testEnvironment: 'jsdom'
}
