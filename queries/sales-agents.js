import gql from "graphql-tag";

/**
 * GraphQL categories and products query.
 */
const SALES_AGENTS_QUERY = gql`query {
  users(where: {role: SALES_AGENT}) {
    nodes {
      databaseId
      email
    }
  }					
}`;

export default SALES_AGENTS_QUERY;
