import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskTimeLog from '../../types/taskTimeLog';
  
  export default {
      type: TaskTimeLog,
      args: {
          taskTimeLogId: {
            type: new GraphQLNonNull(GraphQLString)
          }
      },
      resolve(root, args) {
          return models.TaskTimeLog.findById(args.taskTimeLogId);
      }
  };
  