import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Project from '../../types/project.js';
  
  export default {
      type: Project,
      args: {
          projectId: {
              type: new GraphQLNonNull(GraphQLString)
          }
      },
      resolve(root, args) {
          return models.Project.findById(args.projectId);
      }
  };
  