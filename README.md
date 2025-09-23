# ✅ Weather App – Jest Setup Guide

This guide explains how to set up **Jest** with **Vite + React** from scratch, along with unit tests for the main components of the Weather App (`Home`, `HeroCard`, `DayCard`).

---

## 1. Install Dependencies

Run the following command:

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom babel-jest @babel/core @babel/preset-env @babel/preset-react jest-environment-jsdom identity-obj-proxy
```

## 2. Configure Babel
Create a file babel.config.js:
```bash
export default {
  presets: [
    ["@babel/preset-env", { targets: { node: "current" } }],
    ["@babel/preset-react", { runtime: "automatic" }]
  ]
};
```

## 3. Configure Jest
Create jest.config.js:
```bash
export default {
  testEnvironment: "jsdom", // enables DOM-like environment
  moduleNameMapper: {
    "\\.(css|less|scss)$": "identity-obj-proxy", // mock CSS imports
    "\\.(jpg|jpeg|png|gif|webp|svg)$": "<rootDir>/__mocks__/fileMock.js" // mock image imports
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"]
};
```

## 4. Setup Testing Library
Create jest.setup.js:
```bash
import "@testing-library/jest-dom";
```

## 5. Mock Static Assets
Create __mocks__/fileMock.js:
```bash
export default "test-file-stub";
```

## 6. Add Test Script
In your package.json add:
```bash
"scripts": {
  "test": "jest --watch"
}
```

Now you can run tests with:
```bash
npm test
```