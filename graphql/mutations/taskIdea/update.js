import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';
  import models from '../../../models/index.js';
  import TaskIdea from '../../types/taskIdea.js';
  
  export default {
    type: TaskIdea,
    args: {
      taskIdeaId: {
        type: new GraphQLNonNull(GraphQLString)
      },
      title: {
        type: GraphQLString
      },
      description: {
          type: GraphQLString
      },
      fkProjectId: {
          type: GraphQLString
      }
    },
    resolve (source, args) {
      return models.TaskIdea
        .findById(args.taskIdeaId)
        .then((taskIdea) => {
          return taskIdea.update({ 
            title: args.title || taskIdea.title,
            description: args.description || taskIdea.description,
            fkProjectId: args.fkProjectId || taskIdea.fkProjectId
        });
        });
    }
  };
  