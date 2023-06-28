import { buildClientSchema, getIntrospectionQuery, printSchema } from "graphql";
import { writeFile } from "node:fs/promises";
import { resolve } from "pathe";

fetch("https://api.swan.io/live-partner/graphql", {
  method: "POST",
  body: JSON.stringify({ query: getIntrospectionQuery() }),
  headers: { "Content-Type": "application/json" },
})
  .then((response) => response.json())
  .then((json) => buildClientSchema(json.data))
  .then((schema) => printSchema(schema))
  .then((schema) =>
    writeFile(resolve(__dirname, "../src/graphql/schema.gql"), schema, "utf-8"),
  )
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
