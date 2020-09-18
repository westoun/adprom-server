import { GraphQLList, GraphQLID, GraphQLInt } from 'graphql';

import models from '../../../models/index.js';
import Project from '../../types/project.js';

export default {
  type: new GraphQLList(Project),
  args: {},
  resolve(root, args) {
    return models.Project.findAll({
      where: args
      // ,
      // include: [{ model: models.Task }]
    });
  }
};
