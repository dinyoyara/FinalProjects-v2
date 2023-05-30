import { gql } from "@apollo/client";

const SIGNIN_MUTATION = gql`
  mutation signin($input: SinginInput!) {
    singin(singinInput: $input) {
      token
    }
  }
`;

export { SIGNIN_MUTATION };
