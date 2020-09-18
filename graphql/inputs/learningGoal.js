import {
    GraphQLInputObjectType,
    GraphQLString,
  } from 'graphql';
  
  export default new GraphQLInputObjectType({
    name: 'LearningGoalInput',
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString }
    })
  });
  