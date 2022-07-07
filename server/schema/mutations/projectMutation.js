const ProjectType = require('../types/project');
const {
  GraphQLString,
  GraphQLID,
  GraphQLNonNull,
  GraphQLEnumType,
} = require('graphql');
const Project = require('../../models/project');

const addProject = {
  type: ProjectType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    status: {
      type: new GraphQLEnumType({
        name: 'ProjectStatus',
        values: {
          new: { value: 'Not Started' },
          progress: { value: 'In Progress' },
          completed: { value: 'Completed' },
        },
      }),
      defaultValue: 'Not Started',
    },
    clientId: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => {
    const project = new Project({
      name: args.name,
      description: args.description,
      status: args.status,
      clientId: args.clientId,
    });
    return project.save();
  },
};

const deleteProject = {
  type: ProjectType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => Project.findByIdAndDelete(args.id),
};
const updateProject = {
  type: ProjectType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: {
      type: new GraphQLEnumType({
        name: 'ProjectStatusUpdate',
        values: {
          new: { value: 'Not Started' },
          progress: { value: 'In Progress' },
          completed: { value: 'Completed' },
        },
      }),
    },
  },
  resolve: (parent, args) =>
    Project.findByIdAndUpdate(
      args.id,
      {
        $set: {
          name: args.name,
          description: args.description,
          status: args.status,
        },
      },
      { new: true }
    ),
};

module.exports = { addProject, deleteProject, updateProject };
