import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskTimeLog from '../../types/taskTimeLog.js';
  
  export default {
    type: new GraphQLList(TaskTimeLog),
    args: {
        fkTaskId: {
            type: new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, args) {
      return models.TaskTimeLog.findAll({
          where: args
      });
    }
  };
  