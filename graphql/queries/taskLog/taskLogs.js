import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskLog from '../../types/taskLog.js';
  
  export default {
    type: new GraphQLList(TaskLog),
    args: {},
    resolve(root, args) {
      return models.TaskLog.findAll();
    }
  };
  