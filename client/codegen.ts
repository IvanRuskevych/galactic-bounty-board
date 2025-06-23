import type {CodegenConfig} from "@graphql-codegen/cli";

const config: CodegenConfig = {
    overwrite: true,
    schema: "http://localhost:8000/galactic-bounty",
    documents: ["src/**/*.tsx", "src/**/*.ts"],
    generates: {
        "src/generated/": {
            preset: "client",
            plugins: [
                "typescript",
                "typescript-operations",
                "typescript-react-apollo",
            ],
        },
    },
};

export default config;
