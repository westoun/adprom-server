import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull
  } from 'graphql';
  
  import Project from './project.js';
  import models from '../../models/index.js';
  
  export default new GraphQLObjectType({
    name: 'taskIdea',
    description: 'taskIdea',
    fields() {
      return {
        taskIdeaId: {
          type: GraphQLString,
          description: 'taskIdeaId',
          resolve(taskIdea) {
            return taskIdea.taskIdeaId;
          }
        },
        fkProjectId: {
          type: GraphQLString,
          description: 'fkProjectId',
          resolve(taskIdea) {
            return taskIdea.fkProjectId;
          }
        },
        title: {
          type: GraphQLString,
          description: 'title',
          resolve(taskIdea) {
            return taskIdea.title;
          }
        },
        description: {
          type: GraphQLString,
          description: 'description',
          resolve(taskIdea) {
            return taskIdea.description;
          }
        },
        project: {
          type: Project,
          description: 'project this task idea belongs to',
          resolve(taskIdea) {
            if (taskIdea.hasOwnProperty('project')) {
              return taskIdea.project;
            }
            return models.Project.findById(taskIdea.fkProjectId);
          }
        }
      };
    }
  });
  