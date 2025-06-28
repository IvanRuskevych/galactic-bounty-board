import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "http://localhost:8000/galactic-bounty",
  documents: ["src/**/*.{ts,tsx}"],
  generates: {
    "src/generated/": {
      preset: "client",
      config: {
        enumsAsTypes: true,
      },
    },
  },
};

export default config;
