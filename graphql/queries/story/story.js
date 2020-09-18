import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import Story from '../../types/story.js';
  
  export default {
      type: Story,
      args: {
          storyId: {
              type: new GraphQLNonNull(GraphQLString)
          }
      },
      resolve(root, args) {
          return models.Story.findById(args.storyId);
      }
  };
  