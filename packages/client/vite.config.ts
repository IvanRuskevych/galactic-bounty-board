import react from "@vitejs/plugin-react";
import path from "node:path";
import { defineConfig } from "vite";
import svgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
	base: "/",

	plugins: [
		react(),
		tsconfigPaths(),
		svgr({
			// svgr options: https://react-svgr.com/docs/options/
			svgrOptions: {
				exportType: "default",
				ref: true,
				svgo: false,
				titleProp: true,
			},
			include: "**/*.svg",
		}),
	],

	resolve: {
		alias: {
			"~": path.resolve(__dirname, "src"),
		},
	},

	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					react: ["react", "react-dom"],
					mui: ["@mui/material", "@mui/icons-material", "@emotion/react", "@emotion/styled"],
					apollo: ["@apollo/client", "graphql"],
				},
			},
		},
	},
});
