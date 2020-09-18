import {
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  import models from '../../../models/index.js';
  import TaskIdea from '../../types/taskIdea.js';
  
  export default {
    type: TaskIdea,
    args: {
      taskIdeaId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve (source, args) {
      return models.TaskIdea
        .findById(args.taskIdeaId)
        .then((taskIdea) => {
          return taskIdea.destroy({ force: true });
        });
    }
  };
  