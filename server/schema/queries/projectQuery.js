const ProjectType = require('../types/project');
const Project = require('../../models/project');
const { GraphQLID, GraphQLList } = require('graphql');

const getProjects = {
  type: new GraphQLList(ProjectType),
  resolve: (parent, args) => Project.find(),
};

const getProject = {
  type: ProjectType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => Project.findById(args.id),
};

module.exports = { getProject, getProjects };
