import { GraphQLInputObjectType, GraphQLString, GraphQLBoolean, GraphQLList } from 'graphql';

export default new GraphQLInputObjectType({
  name: 'TaskTypeInput',
  fields: () => ({
    title: { type: GraphQLString },
    icon: { type: GraphQLString }
  })
});
