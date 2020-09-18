import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLBoolean
} from 'graphql';

import { GraphQLDateTime } from 'graphql-iso-date';

import Task from './task.js';
import TaskIdea from './taskIdea.js';
import Story from './story';
import learningGoal from './learningGoal.js';
import models from '../../models/index.js';

export default new GraphQLObjectType({
  name: 'project',
  description: 'project',
  fields() {
    return {
      projectId: {
        type: GraphQLString,
        description: 'projectId',
        resolve(project) {
          return project.projectId;
        }
      },
      title: {
        type: GraphQLString,
        description: 'project title',
        resolve(project) {
          return project.title;
        }
      },
      description: {
        type: GraphQLString,
        description: 'project description',
        resolve(project) {
          return project.description;
        }
      },
      deadline: {
        type: GraphQLDateTime,
        description: 'estimated deadline of this project',
        resolve(project) {
          return project.deadline;
        }
      },
      color: {
        type: GraphQLString,
        description: 'color associated with this project',
        resolve(project) {
          return project.color;
        }
      },
      favorite: {
        type: GraphQLBoolean,
        description: 'is favorite',
        resolve(project) {
          return project.favorite;
        }
      },
      archived: {
        type: GraphQLBoolean,
        description: 'has been archived',
        resolve(project) {
          return project.archived;
        }
      },
      tasks: {
        type: new GraphQLList(Task),
        description: "project's tasks",
        resolve(project) {
          if (project.hasOwnProperty('tasks')) {
            return project.tasks;
          }
          return models.Task.findAll({
            where: { fkProjectId: project.projectId }
          });
        }
      },
      stories: {
        type: new GraphQLList(Story),
        description: 'stories of this project',
        resolve(project) {
          if (project.hasOwnProperty('stories')) {
            return project.stories;
          }
          return models.Story.findAll({
            where: {
              fkProjectId: project.projectId
            }
          });
        }
      },
      taskIdeas: {
        type: new GraphQLList(TaskIdea),
        description: "project's task ideas",
        resolve(project) {
          if (project.hasOwnProperty('taskIdeas')) {
            return project.taskIdeas;
          }
          return models.TaskIdea.findAll({
            where: {
              fkProjectId: project.projectId
            }
          });
        }
      },
      learningGoals: {
        type: new GraphQLList(learningGoal),
        description: "project's learning goals",
        resolve(project) {
          if (project.hasOwnProperty('learningGoals')) {
            return project.learningGoals;
          }
          return models.LearningGoal.findAll({
            where: {
              fkProjectId: project.projectId
            }
          });
        }
      }
    };
  }
});
