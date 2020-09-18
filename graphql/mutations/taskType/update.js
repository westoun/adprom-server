import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean
  } from 'graphql';
  import models from '../../../models/index.js';
  import TaskType from '../../types/taskType';
  
  export default {
    type: TaskType,
    args: {
      taskTypeId: {
        type: new GraphQLNonNull(GraphQLString)
      },
      title: {
        type: GraphQLString
      },
      icon: {
        type: GraphQLString
      }
    },
    resolve(source, args) {
      return models.TaskType.findById(args.taskTypeId).then(taskType => {
        return taskType.update({
          title: args.title || taskType.title,
          title: args.icon || taskType.icon
        });
      });
    }
  };
  