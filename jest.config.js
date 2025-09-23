export default {
  testEnvironment: "jsdom", // allows DOM testing
  moduleNameMapper: {
    // mock CSS or image imports
    "\\.(css|less|scss)$": "identity-obj-proxy",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js"
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};