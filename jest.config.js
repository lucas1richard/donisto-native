// // jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  "preset": "jest-expo",
  "transform": {
    "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  "testMatch": [
    "**/tests/**/*.ts?(x)",
    "**/tests/**/*.ts",
    "**/?(*.)+(spec|test).ts?(x)",
    "**/?(*.)+(spec|test).ts"
  ],
  "moduleFileExtensions": [
    "js",
    "ts",
    "tsx"
  ],
  "setupTestFrameworkScriptFile": "<rootDir>/test-setup.js",
  "collectCoverageFrom": [
    "<rootDir>/src/**/*.{js,jsx}",
    "<rootDir>/src/**/*.{ts,tsx}",
    "!<rootDir>/src/**/*.d.{ts,tsx}",
  ],
  "moduleDirectories": ["node_modules", "src", "build"],
  "globals": {
    "ts-jest": {
      "tsConfig": {
        "jsx": "react"
      }
    }
  }
}
// module.exports = {
//   roots: [
//     '<rootDir>/src'
//   ],
//   transform: {
//     '^.+\\.tsx?$': 'ts-jest',
//     ...tsjPreset.transform,
//     '\\.js$': '<rootDir>/node_modules/react-native/jest/preprocessor.js',
//   },
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
// }