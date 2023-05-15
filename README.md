# Swan GraphQL API + ts-pattern playground

A simple playground to generate a typed SDK for the [Swan API](https://www.swan.io) and experiment pattern matching with [`ts-pattern`](https://github.com/gvergnaud/ts-pattern).

📖 To consult the related article, follow [this link](https://www.swan.io/blog).

## Setup

```sh
# Clone the repository
$ git clone git@github.com:zoontek/swan-gql-api-ts-pattern-playground.git
$ cd swan-gql-api-ts-pattern-playground

# Install dependencies
$ yarn install

# Download the latest API schema
$ yarn download-schema

# Run SDK code generation
$ yarn codegen
```

Once these steps done, open your IDE and experiment in `src/index.tsx`. If you want to add / update available GQL operations, edit the `src/graphql/index.gql` file and run `yarn codegen` again.
