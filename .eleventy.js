module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addCollection("prayers", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/prayers/*.md")
  );

  return {
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
