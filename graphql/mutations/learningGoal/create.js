import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import models from '../../../models/index.js';
import LearningGoal from '../../types/learningGoal.js';
import LearningGoalInput from '../../inputs/learningGoal.js';
import uuid from 'uuid/v1';

export default {
  type: LearningGoal,
  args: {
    fkProjectId: {
      type: new GraphQLNonNull(GraphQLString)
    },
    learningGoal: {
      type: LearningGoalInput
    }
  },
  resolve(source, args) {
    return models.LearningGoal.build({
      learningGoalId: uuid(),
      title: args.learningGoal.title,
      description: args.learningGoal.description,
      fkProjectId: args.fkProjectId
    })
      .save()
      .then(function(newLearningGoal) {
        return models.LearningGoal.findById(newLearningGoal.learningGoalId);
      });
  }
};
