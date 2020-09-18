import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLBoolean,
  GraphQLInt,
  GraphQLList
} from 'graphql';

import {
  GraphQLDateTime
} from 'graphql-iso-date';

import TaskStatus from './taskStatus';
import Project from './project.js';
import Story from './story';
import models from '../../models/index.js';
import TaskLog from './taskLog';
import TaskTimeLog from './taskTimeLog';
import TaskType from './taskType';

export default new GraphQLObjectType({
  name: 'task',
  description: 'task',
  fields() {
    return {
      taskId: {
        type: GraphQLString,
        description: 'taskId',
        resolve(task) {
          return task.taskId;
        }
      },
      fkProjectId: {
        type: GraphQLString,
        description: 'fkProjectId',
        resolve(task) {
          return task.fkProjectId;
        }
      },
      fkStoryId: {
        type: GraphQLString,
        description: 'fkStoryId',
        resolve(task) {
          return task.fkStoryId;
        }
      },
      plannedHours: {
        type: GraphQLInt,
        description: 'planned duration of this task',
        resolve(task) {
          return task.plannedHours;
        }
      },
      title: {
        type: GraphQLString,
        description: 'title',
        resolve(task) {
          return task.title;
        }
      },
      description: {
        type: GraphQLString,
        description: 'description',
        resolve(task) {
          return task.description;
        }
      },
      completed: {
        type: GraphQLBoolean,
        description: 'completed?',
        resolve(task) {
          return task.completed;
        }
      },
      fkTaskStatusId: {
        type: GraphQLString,
        description: 'task status',
        resolve(task) {
          return task.fkTaskStatusId;
        }
      },
      fkTaskTypeId: {
        type: GraphQLString,
        description: 'task type',
        resolve(task) {
          return task.fkTaskTypeId;
        }
      },
      priority: {
        type: GraphQLInt,
        description: 'task priority',
        resolve(task) {
          return task.priority;
        }
      },
      date: {
        type: GraphQLDateTime,
        description: 'tasks due date',
        resolve(task) {
          return task.date;
        }
      },
      project: {
        type: Project,
        description: 'project this task belongs to',
        resolve(task) {
          if (task.hasOwnProperty('project')) {
            return task.project;
          }
          return models.Project.findById(task.fkProjectId);
        }
      },
      story: {
        type: Story,
        description: 'story this task belongs to',
        resolve(task) {
          if(task.hasOwnProperty('story')) {
            return task.story;
          }
          return models.Story.findById(task.fkStoryId);
        }
      },
      taskStatus: {
        type: TaskStatus,
        description: 'task status of this task',
        resolve(task) {
          if (task.hasOwnProperty('taskStatus')) {
            return task.taskStatus;
          }
          return models.TaskStatus.findById(task.fkTaskStatusId);
        }
      },
      taskType: {
        type: TaskType,
        description: 'task type of this task',
        resolve(task) {
          if (task.hasOwnProperty('taskType')) {
            return task.taskType;
          }
          return models.TaskType.findById(task.fkTaskTypeId);
        }
      },
      taskLogs: {
        type: new GraphQLList(TaskLog),
        description: "a log of all the changes on this task",
        resolve(task) {
          if (task.hasOwnProperty('taskLogs')) {
            return task.taskLogs;
          }
          return models.TaskLog.findAll({
            where: {
              fkTaskId: task.taskId
            }
          });
        }
      },
      taskTimeLogs: {
        type: new GraphQLList(TaskTimeLog),
        description: "a time log of this task",
        resolve(task) {
          if (task.hasOwnProperty('taskTimeLogs')) {
            return task.taskTimeLogs;
          }
          return models.TaskTimeLog.findAll({
            where: {
              fkTaskId: task.taskId
            }
          });
        }
      }
    };
  }
});
