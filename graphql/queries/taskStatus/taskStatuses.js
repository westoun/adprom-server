import {
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
  } from 'graphql';
  
  import models from '../../../models/index.js';
  import TaskStatus from '../../types/taskStatus';
  
  export default {
    type: new GraphQLList(TaskStatus),
    resolve(root, args) {
      return models.TaskStatus.findAll();
    }
  };
  