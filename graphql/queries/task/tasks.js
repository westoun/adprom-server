import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Task from '../../types/task.js';
  
  export default {
    type: new GraphQLList(Task),
    args: {
      fkProjectId: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve(root, args) {
      return models.Task.findAll({where: args
        // , include: [ { model: models.Project } ] 
      });
    }
  };
  