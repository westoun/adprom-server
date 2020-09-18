import {
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
    resolve (source, args) {
      return models.ProjectIdea
        .findById(args.projectIdeaId)
        .then((projectIdea) => {
          return projectIdea.destroy({ force: true });
        });
    }
  };
  