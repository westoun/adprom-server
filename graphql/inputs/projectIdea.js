import { GraphQLInputObjectType, GraphQLString, GraphQLList } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'ProjectIdeaInput',
  fields: () => ({
    title: { type: GraphQLString },
    description: {
      type: GraphQLString
    }
  })
});
