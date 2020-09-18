import {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull
} from 'graphql';

import models from '../../models/index.js';

export default new GraphQLObjectType({
    name: 'projectIdea',
    description: 'projectIdea',
    fields () {
        return {
            projectIdeaId: {
                type: GraphQLString,
                description: "projectIdeaId",
                resolve (projectIdea) {
                    return projectIdea.projectIdeaId;
                }
            },
            title: {
                type: GraphQLString,
                description: "project idea title",
                resolve (projectIdea) {
                    return projectIdea.title;
                }
            },
            description: {
                type: GraphQLString,
                description: "project idea description",
                resolve (projectIdea) {
                    return projectIdea.description;
                }
            }
        };
    }
});
