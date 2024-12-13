module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addCollection("prayers", (collectionApi) =>
    collectionApi.getFilteredByGlob("src/prayers/*.md")
  );

  return {
    pathPrefix: "/devotional-siddur/",
    dir: {
      input: "src",
      output: "docs",
      includes: "_includes",
      layouts: "_layouts",
    },
  };
};
