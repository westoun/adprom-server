import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskIdea from '../../types/taskIdea.js';
  
  export default {
    type: new GraphQLList(TaskIdea),
    args: {
      fkProjectId: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve(root, args) {
      return models.TaskIdea.findAll({where: args
        // , include: [ { model: models.Project } ] 
      });
    }
  };
  