import {
  GraphQLInt,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean
} from 'graphql';
import models from '../../../models/index.js';
import TaskStatus from '../../types/taskStatus.js';

export default {
  type: TaskStatus,
  args: {
    taskStatusId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: GraphQLString
    }
  },
  resolve(source, args) {
    return models.TaskStatus.findById(args.taskStatusId).then(taskStatus => {
      return taskStatus.update({
        title: args.title || task.title
      });
    });
  }
};
