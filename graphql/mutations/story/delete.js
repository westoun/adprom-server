import { GraphQLString, GraphQLNonNull } from 'graphql';
import models from '../../../models/index.js';
import Story from '../../types/story.js';

export default {
  type: Story,
  args: {
    storyId: {
      type: new GraphQLNonNull(GraphQLString)
    }
  },
  resolve(source, args) {
    return models.Story.findById(args.storyId).then(story => {
      return story.destroy({ force: true });
    });
  }
};
