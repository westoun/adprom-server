import {
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
    resolve (source, args) {
      return models.Project
        .findById(args.projectId)
        .then((project) => {
          return project.destroy({ force: true });
        });
    }
  };
  