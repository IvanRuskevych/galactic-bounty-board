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
        defaultMapper: "any",
        mappers: {
          User: "@prisma/client#User as PrismaUser",
          Bounty: "@prisma/client#Bounty as PrismaBounty",
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
