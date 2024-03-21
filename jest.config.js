module.exports = {
    // The test environment that will be used for testing
    testEnvironment: 'node',

    // The glob patterns Jest uses to detect test files
    testMatch: ['<rootDir>/test/**/*.test.js'],

    // Transform files with babel-jest for ESM support
    transform: {
        '^.+\\.js$': 'babel-jest',
    },

    // Indicates whether each individual test should be reported during the run
    verbose: true,

    // Collect coverage information while running tests
    collectCoverage: true,

    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
};
