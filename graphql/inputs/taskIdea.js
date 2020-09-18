import {
    GraphQLInputObjectType,
    GraphQLString,
  } from 'graphql';
  
  export default new GraphQLInputObjectType({
    name: 'TaskIdeaInput',
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString }
    })
  });
  