
import {
    GraphQLInt,
    GraphQLNonNull,
    GraphQLString,
  } from 'graphql';
import models from '../../../models/index.js';
import TaskTimeLog from '../../types/taskTimeLog';
import uuid from 'uuid/v1';

export default {
    type: TaskTimeLog,
    args: {
        fkTaskId: {
            type: new GraphQLNonNull(GraphQLString)
        },
        duration: {
            type: GraphQLInt
        }
    },
    resolve (source, args) {
        return models.TaskTimeLog.build({
            taskTimeLogId: uuid(),
            duration: args.duration,
            fkTaskId: args.fkTaskId
        }).save().then(function(newTaskTimeLog) {
            return models.TaskTimeLog.findById(newTaskTimeLog.taskTimeLogId);
        });
    }
};
