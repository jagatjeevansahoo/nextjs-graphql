import { gql } from "graphql-request";

export const postID1 = gql`
  {
    post(id: 1) {
      id
      title
      body
    }
  }
`;

// export const posts = gql`
//   {
//     post(id: $id) {
//       id
//       title
//       body
//     }
//   }
// `;

export const posts = gql`
  query Post() {
    post(id: String!) {
      id
      title
      body
    }
  }
`;
