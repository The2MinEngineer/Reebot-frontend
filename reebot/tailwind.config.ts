import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				black: "#181818",
				"gray-400": "#72787E",
				"gray-200": "#D1D1D1",
				"blue-500": "#287DF9",
			},
		},
	},
	plugins: [],
};
export default config;
