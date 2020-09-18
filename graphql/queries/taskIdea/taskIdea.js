import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskIdea from '../../types/taskIdea.js';
  
  export default {
      type: TaskIdea,
      args: {
          taskIdeaId: {
              type: new GraphQLNonNull(GraphQLString),
            taskIdeaId: "bob" + new Date().valueOf()
          }
      },
      resolve(root, args) {
          return models.TaskIdea.findById(args.taskIdeaId);
      }
  };
  