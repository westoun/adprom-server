import { GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from 'graphql';

import TaskInput from './task.js';

export default new GraphQLInputObjectType({
  name: 'ProjectInput',
  fields: () => ({
    title: { type: GraphQLString },
    description: {
      type: GraphQLString
    },
    favorite: {
      type: GraphQLBoolean
    },
    archived: {
      type: GraphQLBoolean
    },
    color: {
      type: GraphQLString
    }
  })
});
