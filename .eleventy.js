module.exports = async function(eleventyConfig) {
	const { I18nPlugin } = await import("@11ty/eleventy");

	eleventyConfig.addPlugin(I18nPlugin, {
		// any valid BCP 47-compatible language tag is supported
		defaultLanguage: "he", // Required, this site uses "en"

		// Rename the default universal filter names
		filters: {
			// transform a URL with the current page’s locale code
			url: "locale_url",

			// find the other localized content for a specific input file
			links: "locale_links",
		},

		// When to throw errors for missing localized content files
		errorMode: "strict", // throw an error if content is missing at /en/slug
		// errorMode: "allow-fallback", // only throw an error when the content is missing at both /en/slug and /slug
		// errorMode: "never", // don’t throw errors for missing content
	});

  
  eleventyConfig.addPassthroughCopy("src/static/app.css");
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