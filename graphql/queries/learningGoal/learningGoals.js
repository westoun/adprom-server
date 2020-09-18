import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import LearningGoal from '../../types/learningGoal';
  
  export default {
    type: new GraphQLList(LearningGoal),
    args: {
      fkProjectId: {
        type: new GraphQLNonNull(GraphQLString),
      }
    },
    resolve(root, args) {
      return models.LearningGoal.findAll({where: args
        // , include: [ { model: models.Project } ] 
      });
    }
  };
  