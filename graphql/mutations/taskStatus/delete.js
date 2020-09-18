import {
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  import models from '../../../models/index.js';
  import TaskStatus from '../../types/taskStatus.js';
  
  export default {
    type: TaskStatus,
    args: {
      taskStatusId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve (source, args) {
      return models.TaskStatus
        .findById(args.taskStatusId)
        .then((taskStatus) => {
          return taskStatus.destroy({ force: true });
        });
    }
  };
  