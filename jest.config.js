// jest.config.js
const esModules = ['@angular', '@ngrx', 'd3'];

module.exports = {
    preset: 'jest-preset-angular',
    setupFiles: [],
    setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
    globalSetup: 'jest-preset-angular/global-setup',
    extensionsToTreatAsEsm: ['.ts'],
    moduleDirectories: ['node_modules', '<rootDir>'],
    globals: {
        'ts-jest': {
            allowSyntheticDefaultImports: true,
            useESM: true,
            tsconfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.html$',
        },
    },
    moduleFileExtensions: ['ts', 'html', 'js', 'json', 'mjs'],
    moduleNameMapper: {
        '^(\\.{1,2}/.*)\\.js$': '$1',
    },
    transform: {
        '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular'     
    },
    transformIgnorePatterns: [
       `<rootDir>/node_modules/.pnpm/(?!.*\\.mjs$|${esModules.join('|')}@)`,        
    ]
};