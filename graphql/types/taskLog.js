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
    name: 'taskLog',
    description: 'taskLog',
    fields() {
      return {
        taskLogId: {
          type: GraphQLInt,
          description: 'Id of log entry',
          resolve(taskLog) {
            return taskLog.taskLogId;
          }
        },
        fkTaskId: {
          type: GraphQLString,
          description: 'fkTaskId',
          resolve(taskLog) {
            return taskLog.fkTaskId;
          }
        },
        text: {
          type: GraphQLString,
          description: 'text',
          resolve(taskLog) {
            return taskLog.text;
          }
        },
        createdAt: {
          type: GraphQLDateTime,
          description: 'date of insertion',
          resolve(taskLog) {
            return taskLog.createdAt;
          }
        },
        task: {
          type: Task,
          description: 'task this task log belongs to',
          resolve(taskLog) {
            if (taskLog.hasOwnProperty('task')) {
              return taskLog.task;
            }
            return models.Task.findById(taskLog.fkTaskId);
          }
        }
      };
    }
  });
  