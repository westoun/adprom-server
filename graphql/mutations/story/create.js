import { GraphQLInt, GraphQLNonNull, GraphQLString } from 'graphql';
import models from '../../../models/index.js';
import Story from '../../types/story';
import StoryInput from '../../inputs/story.js';
import uuid from 'uuid/v1';

export default {
    type: Story,
    args: {
        fkProjectId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        story: {
            type: StoryInput
        }
    },
    resolve(source, args) {
        return models.Story.build({
            storyId: uuid(),
            title: args.story.title,
            description: args.story.description,
            fkProjectId: args.fkProjectId,
            plannedHours: args.story.plannedHours
        }).save().then(function(newStory) {
            return models.Story.findById(newStory.storyId);
        });
    }
}