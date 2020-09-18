import models from '../../../models/index.js';
import ProjectIdea from '../../types/projectIdea.js';
import ProjectIdeaInput from '../../inputs/projectIdea.js';
import uuid from 'uuid/v1';

export default {
    type: ProjectIdea,
    args: {
        projectIdea: {
            type: ProjectIdeaInput
        }
    },
    resolve (source, args) {
        return models.ProjectIdea.build({
            title: args.projectIdea.title,
            description: args.projectIdea.description,
            projectIdeaId: uuid()
        }).save().then(function(newProjectIdea) {
            return models.ProjectIdea.findById(newProjectIdea.projectIdeaId);
        });
    }
};
