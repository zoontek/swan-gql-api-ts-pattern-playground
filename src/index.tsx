import { GraphQLClient } from "graphql-request";
import { getSdk } from "./graphql";
import { match } from "ts-pattern";

const swanSdk = getSdk(
  new GraphQLClient("https://api.swan.io/live-partner/graphql"),
);

swanSdk
  .AddCard({
    input: {
      accountMembershipId: "test",
      consentRedirectUrl: "https://www.swan.io",
      international: true,
      eCommerce: true,
      nonMainCurrencyTransactions: true,
      withdrawal: true,
    },
  })
  .then(({ addCard: data }) => {
    match(data)
      .with({ __typename: "AddCardSuccessPayload" }, ({ card }) => {
        // …
      })
      .with({ __typename: "ValidationRejection" }, ({ fields }) => {
        // …
      })
      .otherwise(({ message }) => {
        console.error(`rejected with "${message}"`);
      });
  });
