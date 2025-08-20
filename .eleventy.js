const i18n = require("eleventy-plugin-i18n");
const translations = require("./src/_data/i18n");

module.exports = function(eleventyConfig) {
  eleventyConfig.addPlugin(i18n, {
    translations,
    fallbackLocales: {
      '*': 'he'
    }
  });

  eleventyConfig.addPassthroughCopy("src/static/index.css");
  eleventyConfig.addPassthroughCopy("src/static/style.css");
  eleventyConfig.addPassthroughCopy("src/static/favicon.png");
  
  eleventyConfig.addGlobalData("currentYear", () => new Date().getFullYear());
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};