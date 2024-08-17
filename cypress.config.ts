const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173",
    supportFile: false,
  },

  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
