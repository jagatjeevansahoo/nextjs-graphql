import { GraphQLClient } from "graphql-request";

const endPoint = process.env.GRAPHQL_ENDPOINT as string;
const graphqlClient = new GraphQLClient(endPoint, { headers: {} });

export default graphqlClient;
