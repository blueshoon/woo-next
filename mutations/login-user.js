import gql from "graphql-tag";

const LOGIN_MUTATION = gql`
mutation ($input: LoginInput! ) {
  login( input: $input ) {
    user {
      jwtAuthToken
    }
  }
}
`;

export default LOGIN_MUTATION;