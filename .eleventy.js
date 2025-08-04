module.exports = function(eleventyConfig) {
  
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