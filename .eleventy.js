module.exports = function(eleventyConfig) {

  
      // make the seed target act like prod
      return {
        dir: {
          input: "src/site",
          output: "dist",
          data: `_data`
        },
        templateFormats : ["njk", "md", "11ty.js"],
        htmlTemplateEngine : "njk",
        markdownTemplateEngine : "njk"
      };
    
    };