import {
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  import models from '../../../models/index.js';
  import LearningGoal from '../../types/learningGoal';
  
  export default {
    type: LearningGoal,
    args: {
      learningGoalId: {
        type: new GraphQLNonNull(GraphQLString)
      }
    },
    resolve (source, args) {
      return models.LearningGoal
        .findById(args.learningGoalId)
        .then((learningGoal) => {
          return learningGoal.destroy({ force: true });
        });
    }
  };
  