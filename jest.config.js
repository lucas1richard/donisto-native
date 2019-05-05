// // jest.config.js
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  "preset": "react-native",
  // "preset": "jest-expo",
  "haste": {
    "defaultPlatform": "ios",
    "platforms": [
      "android",
      "ios",
      "native"
    ],
    "providesModuleNodeModules": [
      "react-native"
    ]
  },
  "moduleNameMapper": {
    "^[./a-zA-Z0-9$_-]+\\.(bmp|gif|jpg|jpeg|png|psd|svg|webp)$":
      "RelativeImageStub",
    "^React$": "<rootDir>/node_modules/react",
    "^react$": "<rootDir>/node_modules/react",
    "^react-native$": "<rootDir>/node_modules/react-native",
    "^react-native/(.*)$": "<rootDir>/node_modules/react-native/$1",
    "^[./a-zA-Z0-9$_-]+\\.(ttf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$":
      "RelativeImageStub",
    "^react-native-vector-icons$": "<rootDir>/node_modules/@expo/vector-icons"
  },
  "modulePathIgnorePatterns": [
    "<rootDir>/node_modules/react-native/Libraries/react-native/"
  ],
  "transform": {
    "^.+\\.js$": "babel-jest",
    "^.+\\.(bmp|gif|jpg|jpeg|mp4|png|psd|svg|webp|ttf|otf|m4v|mov|mp4|mpeg|mpg|webm|aac|aiff|caf|m4a|mp3|wav|html|pdf|obj)$": "jest-expo/src/assetFileTransformer.js"
  },
  "transformIgnorePatterns": [
    "node_modules/(?!((jest-)?react-native|react-clone-referenced-element|expo|@expo|react-navigation|sentry-expo))"
  ],
  "setupFiles": [
    "react-native/jest/setup.js",
    "jest-expo/src/setup.js"
  ],
  "testEnvironment": "node",
  // "presets": ["jest-expo", "react-native"],
  "transform": {
    // "^.+\\.js$": "<rootDir>/node_modules/react-native/jest/preprocessor.js",
    "^.+\\.tsx?$": "ts-jest"
  },
  // "transformIgnorePatterns": [
  //   "node_modules/(?!native-base-shoutem-theme|Expo|@shoutem/animation|@shoutem/ui|tcomb-form-native)"
  // ],
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
  // "transformIgnorePatterns": ["node_modules"],
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