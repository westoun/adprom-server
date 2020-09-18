import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskType from '../../types/taskType';
  
  export default {
    type: new GraphQLList(TaskType),
    resolve(root, args) {
      return models.TaskType.findAll();
    }
  };
  