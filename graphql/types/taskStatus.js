import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList
  } from 'graphql';
  
  import Task from './task.js';
  import models from '../../models/index.js';
  
  export default new GraphQLObjectType({
    name: 'taskStatus',
    description: 'task status',
    fields() {
      return {
        taskStatusId: {
          type: GraphQLString,
          description: 'taskStatusId',
          resolve(taskStatus) {
            return taskStatus.taskStatusId;
          }
        },
        title: {
          type: GraphQLString,
          description: 'title',
          resolve(task) {
            return task.title;
          }
        },
        tasks: {
            type: new GraphQLList(Task),
            description: "tasks with this status",
            resolve(taskStatus) {
              if (taskStatus.hasOwnProperty('tasks')) {
                return taskStatus.tasks;
              }
              return models.Task.findAll({
                where: { fkTaskStatusId: taskStatus.taskStatusId }
              });
            }
          },
      };
    }
  });
  