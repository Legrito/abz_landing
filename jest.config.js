module.exports = {
  // ...
  transform: {
    "^.+\\.jsx?$": "babel-jest",
  },
  transformIgnorePatterns: [
    "/node_modules/(?!(axios|other-module-to-compile)/)",
  ],
  globals: {
    NODE_ENV: "test",
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  testURL: "http://localhost/",
  testMatch: ["<rootDir>/tests/unit/**/*.spec.(js|jsx|ts|tsx)"],
  moduleFileExtensions: ["js", "jsx", "json", "vue"],
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,jsx,vue}", "!**/node_modules/**"],
};
