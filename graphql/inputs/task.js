import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLBoolean,
    GraphQLInt
  } from 'graphql';

  import {
    GraphQLDateTime
  } from 'graphql-iso-date';
  
  export default new GraphQLInputObjectType({
    name: 'TaskInput',
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        completed: {
          type: GraphQLBoolean
        },
        fkTaskStatusId: {
          type: GraphQLString
        },
        priority: {
          type: GraphQLInt
        },
        fkStoryId: {
          type: GraphQLString
        },
        date: {
          type: GraphQLDateTime
        }
    })
  });
  