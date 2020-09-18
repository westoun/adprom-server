import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt
  } from 'graphql';

  import {
      GraphQLDateTime
  } from 'graphql-iso-date';
  
  import Task from './task.js';
  import models from '../../models/index.js';
  
  export default new GraphQLObjectType({
    name: 'taskTimeLog',
    description: 'taskTimeLog',
    fields() {
      return {
        taskTimeLogId: {
          type: GraphQLString,
          description: 'Id of time log entry',
          resolve(taskTimeLog) {
            return taskTimeLog.taskTimeLogId;
          }
        },
        fkTaskId: {
          type: GraphQLString,
          description: 'fkTaskId',
          resolve(taskLog) {
            return taskLog.fkTaskId;
          }
        },
        duration: {
          type: GraphQLInt,
          description: 'duration in milliseconds',
          resolve(taskTimeLog) {
            return taskTimeLog.duration;
          }
        },
        task: {
          type: Task,
          description: 'task this task log belongs to',
          resolve(taskTimeLog) {
            if (taskTimeLog.hasOwnProperty('task')) {
              return taskTimeLog.task;
            }
            return models.Task.findById(taskTimeLog.fkTaskId);
          }
        }
      };
    }
  });
  