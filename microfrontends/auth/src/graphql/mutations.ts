import { gql } from "@apollo/client";

const SINGIN_MUTATION = gql`
  mutation ($input: SinginInput!) {
    singin(singinInput: $input) {
      token
    }
  }
`;

const SINGUP_MUTATION = gql`
  mutation ($input: SingupInput!) {
    singup(singupInput: $input) {
      id
    }
  }
`;

export { SINGIN_MUTATION, SINGUP_MUTATION };
