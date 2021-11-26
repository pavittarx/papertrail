module.exports = {
  verbose: true,
  rootDir: "./",
  name: "Trail Server",
  testEnvironment: "node",
  moduleDirectories: ["node_modules", "server"],
  "transform": {
    "\\.js$": "../babel.jest-server"
  },
  modulePathIgnorePatterns: ["../app"],
  testPathIgnorePatterns: ["../app", "server/dist"]
}