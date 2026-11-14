import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function (eleventyConfig) {

  // This will stop the default behaviour of foo.html being turned into foo/index.html
  eleventyConfig.addGlobalData("permalink", "{{ page.filePathStem }}.html");
  eleventyConfig.addPlugin(EleventyHtmlBasePlugin);
  
  return {
    // This makes sure HTML files use Nunjucks
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "docs",
    },
    pathPrefix: "/miriamdulin.github.io/"
  };
};
