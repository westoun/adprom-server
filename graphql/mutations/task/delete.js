import {
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  import models from '../../../models/index.js';
  import Task from '../../types/task.js';
  
  export default {
    type: Task,
    args: {
      taskId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve (source, args) {
      return models.Task
        .findById(args.taskId)
        .then((task) => {
          return task.destroy({ force: true });
        });
    }
  };
  