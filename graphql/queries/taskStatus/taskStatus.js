import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskStatus from '../../types/taskStatus';
  
  export default {
      type: TaskStatus,
      args: {
          taskStatusId: {
              type: new GraphQLNonNull(GraphQLString),
          }
      },
      resolve(root, args) {
          return models.TaskStatus.findById(args.taskStatusId);
      }
  };
  