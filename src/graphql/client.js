import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://apollo-music-db.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret":
      "0RBciDus1x8dkZ1SjI06iirIo8W2q7kaiizx4N3DGGG84Tnk2KsN1pKxV2jrKFnz",
  },
});

export default client;
