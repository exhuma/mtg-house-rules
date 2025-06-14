const manaPlugin = require('./markdown-it-mana');

module.exports = function(eleventyConfig) {
  eleventyConfig.amendLibrary('md', mdLib => {
    mdLib.use(manaPlugin);
  });

  // Passthrough copy for static assets
  eleventyConfig.addPassthroughCopy("assets");

  // Add a collection for all pages in the /pages directory
  eleventyConfig.addCollection("pages", function(collectionApi) {
    return collectionApi.getFilteredByGlob("pages/*.md");
  });

  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
