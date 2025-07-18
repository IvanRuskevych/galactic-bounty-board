import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:4000/graphql",
	documents: ["src/**/*.{ts,tsx}"],
	generates: {
		"src/graphql/generated/": {
			preset: "client",
			config: {
				enumsAsTypes: true,
			},
		},
	},
};

export default config;
