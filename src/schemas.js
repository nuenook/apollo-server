import { gql } from 'apollo-server';

import bookSchema from './book/bookSchema';
import authorSchema from './author/authorSchema';
import userSchema from './user/userSchema';

const linkType = gql`

  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`
export default [
  linkType,
  bookSchema,
  authorSchema,
  userSchema
]