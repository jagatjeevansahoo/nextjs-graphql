import { gql } from "graphql-request";

export const singlePost = gql`
  query getPost($id: ID!) {
    post(id: $id) {
      id
      title
      body
    }
  }
`;

export const posts = gql`
  query {
    posts {
      data {
        id
        title
      }
      meta {
        totalCount
      }
    }
  }
`;

export const paginatedPosts = gql`
  query getPaginatedPosts($options: PageQueryOptions) {
    posts(options: $options) {
      data {
        id
        title
        body
      }
      meta {
        totalCount
      }
    }
  }
`;
