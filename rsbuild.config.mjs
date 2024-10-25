import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
	plugins: [pluginReact()],
	source: {
		entry: {
			main: "./src/main.jsx",
		},
	},
	tools: {
		swc: {
			jsc: {
				parser: {
					syntax: "typescript",
					tsx: true,
				},
				transform: {
					react: {
						runtime: "automatic",
						development: process.env.NODE_ENV === "development",
					},
				},
			},
			env: {
				targets: [
					"chrome >= 87",
					"edge >= 88",
					"firefox >= 78",
					"safari >= 14",
				],
			},
		},
	},
	html: {
		template: "./index.html",
	},
});
