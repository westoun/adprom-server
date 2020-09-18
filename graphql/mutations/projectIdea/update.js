import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import models from '../../../models/index.js';
import ProjectIdea from '../../types/projectIdea.js';

export default {
  type: ProjectIdea,
  args: {
    projectIdeaId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    }
  },
  resolve(source, args) {
    return models.ProjectIdea.findById(args.projectIdeaId).then(projectIdea => {
      return projectIdea.update({
        title: args.title || projectIdea.title,
        description: args.description || projectIdea.description
      });
    });
  }
};
