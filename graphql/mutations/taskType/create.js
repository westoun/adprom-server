import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import models from '../../../models/index.js';
import uuid from 'uuid/v1';
import TaskType from '../../types/taskType';
import TaskTypeInput from '../../inputs/taskType';

export default {
  type: TaskType,
  args: {
    taskType: {
        type: TaskTypeInput
    }
  },
  resolve(source, args) {
    return models.TaskType.build({
      taskTypeId: uuid(),
      title: args.taskType.title,
      icon: args.taskType.icon
    })
      .save()
      .then(function(newTaskType) {
        return models.TaskType.findById(newTaskType.taskTypeId);
      });
  }
};
