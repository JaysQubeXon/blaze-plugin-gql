import * as express from "express";
import * as bodyParser from "body-parser";

import { ApolloServer } from "apollo-server-express";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";
import { context } from "./context";

const PORT = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context
});

server.applyMiddleware({ app });

app.listen({ port: PORT }, () => {
  console.log(
    "\x1b[36m%s\x1b[35m%s\x1b[0m",
    `blaze-bridge-graphql `,
    `listening on port`,
    `${PORT}`
  );
});
