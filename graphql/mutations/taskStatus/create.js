import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import models from '../../../models/index.js';
import uuid from 'uuid/v1';
import TaskStatus from '../../types/taskStatus';

export default {
  type: TaskStatus,
  args: {
    title: {
      type: GraphQLString
    }
  },
  resolve(source, args) {
    return models.TaskStatus.build({
      taskId: uuid(),
      title: args.title,
    })
      .save()
      .then(function(newTaskStatus) {
        return models.TaskStatus.findById(newTaskStatus.taskStatusId);
      });
  }
};
