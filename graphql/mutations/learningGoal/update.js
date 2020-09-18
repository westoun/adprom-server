import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';
  import models from '../../../models/index.js';
  import LearningGoal from '../../types/learningGoal.js';
  
  export default {
    type: LearningGoal,
    args: {
      learningGoalId: {
        type: new GraphQLNonNull(GraphQLString)
      },
      title: {
        type: GraphQLString
      },
      description: {
          type: GraphQLString
      },
      fkProjectId: {
          type: GraphQLString
      }
    },
    resolve (source, args) {
      return models.LearningGoal
        .findById(args.learningGoalId)
        .then((learningGoal) => {
          return learningGoal.update({ 
            title: args.title || learningGoal.title,
            description: args.description || learningGoal.description,
            fkProjectId: args.fkProjectId || learningGoal.fkProjectId
        });
        });
    }
  };
  