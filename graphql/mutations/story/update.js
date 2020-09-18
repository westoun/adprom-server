import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
    GraphQLBoolean
  } from 'graphql';
  import models from '../../../models/index.js';
  import Story from '../../types/story';
  import { GraphQLDateTime } from 'graphql-iso-date';


  export default {
      type: Story,
      args: {
        storyId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        title: {
            type: GraphQLString
        },
        description: {
            type: GraphQLString
        },
        plannedHours: {
            type: GraphQLInt
        },
        fkProjectId: {
            type: GraphQLString
        }
      },
      resolve(source, args) {
        return models.Story.findById(args.storyId).then(story => {
            return story.update({
                title: args.title || story.title,
                description: args.description || story.description,
                plannedHours: args.plannedHours || story.plannedHours,
                fkProjectId: args.fkProjectId || story.fkProjectId
            })
        })
      }
  }