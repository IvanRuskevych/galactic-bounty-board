import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/typeDefs/index.ts", // <-- GraphQL typeDefs (SDL)
  generates: {
    "src/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-document-nodes",
      ],
      config: {
        useIndexSignature: true,
        contextType: "../context#Context",
        mappers: {
          User: "@prisma/client#User",
          Bounty: "@prisma/client#Bounty",
        },
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
      },
    },
  },
};
export default config;
