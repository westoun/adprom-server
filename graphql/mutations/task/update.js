import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean
  } from 'graphql';

  import {
    GraphQLDateTime
  } from 'graphql-iso-date';
  import models from '../../../models/index.js';
  import Task from '../../types/task.js';
  
  export default {
    type: Task,
    args: {
      taskId: {
        type: new GraphQLNonNull(GraphQLString)
      },
      title: {
        type: GraphQLString
      },
      description: {
          type: GraphQLString
      },
      completed: {
        type: GraphQLBoolean
      },
      date: {
        type: GraphQLDateTime
      },
      fkTaskStatusId: {
        type: GraphQLString
      },
      fkTaskTypeId: {
        type: GraphQLString
      },
      priority: {
        type: GraphQLInt
      },
      fkProjectId: {
          type: GraphQLString
      },
      fkStoryId: {
        type: GraphQLString
      }
    },
    resolve (source, args) {
      return models.Task
        .findById(args.taskId)
        .then((task) => {
          console.log("!!! DATE: ", args.date, "!!!")
          return task.update({ 
            title: args.title || task.title,
            description: args.description || task.description,
            completed: args.completed,
            fkTaskStatusId: args.fkTaskStatusId || task.fkTaskStatusId,
            priority: args.priority,
            fkProjectId: args.fkProjectId || task.fkProjectId,
            fkStoryId: args.fkStoryId || task.fkStoryId,
            fkTaskTypeId: args.fkTaskTypeId || task.fkTaskTypeId,
            date: args.date || task.date
        });
        });
    }
  };
  