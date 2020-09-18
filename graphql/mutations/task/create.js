import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import models from '../../../models/index.js';
import Task from '../../types/task.js';
import TaskInput from '../../inputs/task.js';
import uuid from 'uuid/v1';

export default {
  type: Task,
  args: {
    fkProjectId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    task: {
      type: TaskInput
    }
  },
  resolve(source, args) {
    return models.Task.build({
      taskId: uuid(),
      title: args.task.title,
      description: args.task.description,
      completed: args.task.completed,
      fkProjectId: args.fkProjectId,
      fkTaskStatusId: args.task.fkTaskStatusId || 'taskStatus01',
      fkTaskTypeId: args.task.fkTaskTypeId || 'taskType05',
      fkStoryId: args.task.fkStoryId,
      priority: args.task.priority || 0
    })
      .save()
      .then(function(newTask) {
        return models.Task.findById(newTask.taskId);
      });
  }
};
