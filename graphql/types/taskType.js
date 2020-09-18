import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLInt,
    GraphQLList
  } from 'graphql';

  import {
      GraphQLDateTime
  } from 'graphql-iso-date';
  
  import Task from './task.js';
  import models from '../../models/index.js';
  
  export default new GraphQLObjectType({
    name: 'taskType',
    description: 'taskType',
    fields() {
      return {
        taskTypeId: {
          type: GraphQLString,
          description: 'Id of task type',
          resolve(taskType) {
            return taskType.taskTypeId;
          }
        },
        title: {
          type: GraphQLString,
          description: 'title',
          resolve(taskType) {
            return taskType.title;
          }
        },
        icon: {
          type: GraphQLString,
          description: 'icon',
          resolve(taskType) {
            return taskType.icon;
          }
        },
        tasks: {
          type: new GraphQLList(Task),
          description: 'tasks of this task type',
          resolve(taskType) {
            if (taskType.hasOwnProperty('tasks')) {
              return taskType.tasks;
            }
            return models.Task.findAll({
                where: {
                    fkTaskTypeId: taskType.taskTypeId
                }
            });
          }
        }

      };
    }
  });
  