module.exports = function(eleventyConfig) {
  
  eleventyConfig.addPassthroughCopy("src/static/index.css");
  eleventyConfig.addPassthroughCopy("src/static/style.css");
  
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    }
  };
};