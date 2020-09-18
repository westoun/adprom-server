import {
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  import models from '../../../models/index.js';
  import TaskType from '../../types/taskType';
  
  export default {
    type: TaskType,
    args: {
      taskTypeId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve (source, args) {
      return models.TaskType
        .findById(args.taskTypeId)
        .then((taskType) => {
          return taskType.destroy({ force: true });
        });
    }
  };
  