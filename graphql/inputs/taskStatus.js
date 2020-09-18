import { GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'TaskStatusInput',
  fields: () => ({
    title: { type: GraphQLString }
  })
});
