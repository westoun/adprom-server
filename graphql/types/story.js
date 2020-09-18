import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLNonNull,
    GraphQLBoolean,
    GraphQLInt,
    GraphQLList
  } from 'graphql';
  
  import { GraphQLDateTime } from 'graphql-iso-date';

  import Project from './project.js';
  import story from './story';
  import models from '../../models/index.js';
  import Task from './task';
  
  export default new GraphQLObjectType({
    name: 'story',
    description: 'story',
    fields() {
        return {
            storyId: {
                type: GraphQLString,
                description: 'storyId',
                resolve(story) {
                    return story.storyId;
                }
            },
            fkProjectId: {
                type: GraphQLString,
                description: 'fkProjectId',
                resolve(story) {
                  return story.fkProjectId;
                }
              },
              title: {
                  type: GraphQLString,
                  description: 'title',
                  resolve(story) {
                      return story.title;
                  }
              },
              description: {
                  type: GraphQLString,
                  description: 'description',
                  resolve(story) {
                      return story.description;
                  }
              },
              plannedHours: {
                  type: GraphQLInt,
                  description: 'planned duration',
                  resolve(story) {
                      return story.plannedHours;
                  }
              },
              deadline: {
                  type: GraphQLDateTime,
                  description: 'deadline of this story',
                  resolve(story) {
                      return story.deadline;
                  }
              },
              project: {
                type: Project,
                description: 'project this story belongs to',
                resolve(story) {
                  if (story.hasOwnProperty('project')) {
                    return story.project;
                  }
                  return models.Project.findById(story.fkProjectId);
                }
              },
              tasks: {
                type: new GraphQLList(Task),
                description: "stories tasks",
                resolve(story) {
                  if (story.hasOwnProperty('tasks')) {
                    return story.tasks;
                  }
                  return models.Task.findAll({
                    where: { fkStoryId: story.storyId }
                  });
                }
              }
        }
    }
  });