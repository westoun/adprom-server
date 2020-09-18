import models from '../../../models/index.js';
import Project from '../../types/project.js';
import ProjectInput from '../../inputs/project.js';
import uuid from 'uuid/v1';

export default {
    type: Project,
    args: {
        project: {
            type: ProjectInput
        }
    },
    resolve (source, args) {
        return models.Project.build({
            title: args.project.title,
            description: args.project.description,
            projectId: uuid(),
            favorite: args.project.favorite || false,
            archived: args.project.archived || false,
            color: args.project.color || '#EEE'
        }).save().then(function(newProject) {
            return models.Project.findById(newProject.projectId);
        });
    }
};
