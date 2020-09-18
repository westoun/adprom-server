
import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';import models from '../../../models/index.js';
import TaskIdea from '../../types/taskIdea.js';
import TaskIdeaInput from '../../inputs/taskIdea.js';
import uuid from 'uuid/v1';

export default {
    type: TaskIdea,
    args: {
        fkProjectId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        taskIdea: {
            type: TaskIdeaInput
        }
    },
    resolve (source, args) {
        return models.TaskIdea.build({
            taskIdeaId: uuid(),
            title: args.taskIdea.title,
            description: args.taskIdea.description,
            fkProjectId: args.fkProjectId
        }).save().then(function(newTaskIdea) {
            return models.TaskIdea.findById(newTaskIdea.taskIdeaId);
        });
    }
};
