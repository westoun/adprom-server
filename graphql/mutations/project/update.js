import { GraphQLInt, GraphQLNonNull, GraphQLString, GraphQLBoolean } from 'graphql';
import models from '../../../models/index.js';
import Project from '../../types/project.js';

export default {
  type: Project,
  args: {
    projectId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    title: {
      type: GraphQLString
    },
    description: {
      type: GraphQLString
    },
    favorite: {
      type: GraphQLBoolean
    },
    archived: {
      type: GraphQLBoolean
    },
    color: {
      type: GraphQLString
    }
  },
  resolve(source, args) {
    return models.Project.findById(args.projectId).then(project => {
      return project.update({
        title: args.title || project.title,
        description: args.description || project.description,
        favorite: args.favorite || project.favorite,
        archived: args.archive || project.archived,
        color: args.color || project.color
      });
    });
  }
};
