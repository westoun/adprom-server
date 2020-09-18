import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  
  import Project from './project.js';
  import models from '../../models/index.js';
  
  export default new GraphQLObjectType({
    name: 'learningGoal',
    description: 'learningGoal',
    fields() {
      return {
        learningGoalId: {
          type: GraphQLString,
          description: 'learningGoalId',
          resolve(learningGoal) {
            return learningGoal.learningGoalId;
          }
        },
        fkProjectId: {
          type: GraphQLString,
          description: 'fkProjectId',
          resolve(learningGoal) {
            return learningGoal.fkProjectId;
          }
        },
        title: {
          type: GraphQLString,
          description: 'title',
          resolve(learningGoal) {
            return learningGoal.title;
          }
        },
        description: {
          type: GraphQLString,
          description: 'description',
          resolve(learningGoal) {
            return learningGoal.description;
          }
        },
        project: {
          type: Project,
          description: 'project this learningGoal belongs to',
          resolve(learningGoal) {
            if (learningGoal.hasOwnProperty('project')) {
              return learningGoal.project;
            }
            return models.Project.findById(learningGoal.fkProjectId);
          }
        }
      };
    }
  });
  