import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import LearningGoal from '../../types/learningGoal';
  
  export default {
      type: LearningGoal,
      args: {
          learningGoalId: {
              type: new GraphQLNonNull(GraphQLString),
            learningGoalId: "bob" + new Date().valueOf()
          }
      },
      resolve(root, args) {
          return models.LearningGoal.findById(args.learningGoalId);
      }
  };
  