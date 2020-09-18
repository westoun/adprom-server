import { GraphQLList, GraphQLID, GraphQLInt } from 'graphql';

import models from '../../../models/index.js';
import ProjectIdea from '../../types/projectIdea.js';

export default {
  type: new GraphQLList(ProjectIdea),
  args: {},
  resolve(root, args) {
    return models.ProjectIdea.findAll({
      where: args
    });
  }
};
