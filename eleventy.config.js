import tailwindcss from "eleventy-plugin-tailwindcss-4";
import pluginTOC from "eleventy-plugin-toc";
import markdownIt from "markdown-it";
import markdownItAnchor from "markdown-it-anchor";

export const config = {
	dir: {
		input: "src",
  },
  markdownTemplateEngine: "njk",

};

const isoDateFormatter = new Intl.DateTimeFormat("en", {
	year: "numeric",
	month: "2-digit",
	day: "2-digit",
	timeZone: "UTC",
});

export default function (eleventyConfig) {
	eleventyConfig.addFilter("date", (value, format) => {
		if (format !== "yyyy-MM-dd") throw new Error(`Unsupported date format: ${format}`);
		return isoDateFormatter.format(value);
	});
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
	const slots = {};
	eleventyConfig.addGlobalData('eleventyComputed.slots', function() {
		return data => {
			const key = data.page.inputPath;
			slots[key] = slots[key] || {};
			return slots[key];
		}
	});
	eleventyConfig.addPairedShortcode('slot', function (content, name) {
		if (!name) throw new Error('Missing name for {% slot %} block!');
		slots[this.page.inputPath][name] = content;
		return '';
	});
}
