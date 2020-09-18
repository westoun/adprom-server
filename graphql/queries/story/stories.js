import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Story from '../../types/story';
  
  export default {
    type: new GraphQLList(Story),
    args: {
      fkProjectId: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve(root, args) {
      return models.Story.findAll({where: args
        // , include: [ { model: models.Project } ] 
      });
    }
  };
  