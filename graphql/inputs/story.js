import {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLInt
  } from 'graphql';

  import { GraphQLDateTime } from 'graphql-iso-date';

  
  export default new GraphQLInputObjectType({
    name: 'StoryInput',
    fields: () => ({
        title: { type: GraphQLString },
        description: { type: GraphQLString },
        fkProjectId: {
            type: GraphQLString
        },
        plannedHours: {
            type: GraphQLInt
        },
    })
  });
  