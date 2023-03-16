import type { JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        tsconfig: "./tsconfig.jest.json",
      },
    ],
  },
  setupFilesAfterEnv: ["./src/jest.setup.ts"],
};

export default jestConfig;
