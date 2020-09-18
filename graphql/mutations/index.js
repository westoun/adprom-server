import createProject from './project/create.js';
import updateProject from './project/update.js';
import deleteProject from './project/delete.js';

import createProjectIdea from './projectIdea/create.js';
import updateProjectIdea from './projectIdea/update.js';
import deleteProjectIdea from './projectIdea/delete.js';

import createTask from './task/create.js';
import updateTask from './task/update.js';
import deleteTask from './task/delete.js';

import createTaskType from './taskType/create.js';
import updateTaskType from './taskType/update.js';
import deleteTaskType from './taskType/delete.js';

import createTaskTimeLog from './taskTimeLog/create';

import createTaskIdea from './taskIdea/create.js';
import updateTaskIdea from './taskIdea/update.js';
import deleteTaskIdea from './taskIdea/delete.js';

import createLearningGoal from './learningGoal/create.js';
import updateLearningGoal from './learningGoal/update.js';
import deleteLearningGoal from './learningGoal/delete.js';

import createStory from './story/create';
import updateStory from './story/update';
import deleteStory from './story/delete';

export default {
    createProject,
    createProjectIdea,
    createTask,
    createTaskIdea,
    createTaskTimeLog,
    createTaskType,
    createLearningGoal,
    createStory,
    updateProject,
    updateProjectIdea,
    updateTask,
    updateTaskIdea,
    updateTaskType,
    updateLearningGoal,
    updateStory,
    deleteProject,
    deleteProjectIdea,
    deleteTask,
    deleteTaskIdea,
    deleteTaskType,
    deleteLearningGoal,
    deleteStory
};
