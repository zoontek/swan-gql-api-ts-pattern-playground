import type { CodegenConfig } from "@graphql-codegen/cli";
import { resolve } from "pathe";

const config: CodegenConfig = {
  errorsOnly: true,
  overwrite: true,

  hooks: {
    afterAllFileWrite: "prettier --write",
  },

  documents: resolve(__dirname, "../src/graphql/index.gql"),
  schema: resolve(__dirname, "../src/graphql/schema.gql"),

  generates: {
    [resolve(__dirname, "../src/graphql/index.ts")]: {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        enumsAsTypes: true,
        defaultScalarType: "unknown",
      },
    },
  },
};

export default config;
