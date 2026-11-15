import tailwindcss from "eleventy-plugin-tailwindcss-4";
import pluginTOC from "eleventy-plugin-toc";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export const config = {
	dir: {
		input: "src",
	},
};
export default function (eleventyConfig) {
	eleventyConfig.setLibrary(
		"md",
		markdownIt({
			html: true,
			linkify: true,
			typographer: true,
		}).use(markdownItAnchor, {}),
	);
	eleventyConfig.addPlugin(tailwindcss, {
		input: "base.css",
	});
	eleventyConfig.addPassthroughCopy("src/favicon.png");
	eleventyConfig.addPassthroughCopy("src/assets/");
	eleventyConfig.addPlugin(pluginTOC, {
		tags: ["h2", "h3"],
		wrapper: "nav",
		wrapperClass: "toc",
		ul: true,
	});
}
