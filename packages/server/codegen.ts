import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "src/graphql/typeDefs/**/*.graphql", // <-- GraphQL typeDefs (SDL)
  generates: {
    "src/graphql/generated/graphql.ts": {
      plugins: [
        "typescript",
        "typescript-resolvers",
        "typescript-document-nodes",
      ],
      config: {
        contextType: "../../context#Context",
        useIndexSignature: true,
        defaultMapper: "any",
        mappers: {
          User: "@prisma/client#User as PrismaUser",
          Bounty: "@prisma/client#Bounty as PrismaBounty",
        },
        avoidOptionals: {
          field: true,
          inputValue: false,
        },
        // maybeValue: "T | null", // for resolver tests
      },
    },
  },
};

export default config;
