import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import ProjectIdea from '../../types/projectIdea.js';
  
  export default {
      type: ProjectIdea,
      args: {
          projectIdeaId: {
              type: new GraphQLNonNull(GraphQLString)
          }
      },
      resolve(root, args) {
          return models.ProjectIdea.findById(args.projectIdeaId);
      }
  };
  