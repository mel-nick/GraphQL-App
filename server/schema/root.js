const { getClient, getClients } = require('./queries/clientQuery');
const { getProject, getProjects } = require('./queries/projectQuery');
const { addClient, deleteClient } = require('./mutations/clientMutation');
const {
  addProject,
  deleteProject,
  updateProject,
} = require('./mutations/projectMutation');

const { GraphQLObjectType, GraphQLSchema } = require('graphql');

const query = new GraphQLObjectType({
  name: 'query',
  fields: {
    getClient,
    getClients,
    getProject,
    getProjects,
  },
});

const mutation = new GraphQLObjectType({
  name: 'mutation',
  fields: {
    addClient,
    deleteClient,
    addProject,
    deleteProject,
    updateProject,
  },
});

module.exports = new GraphQLSchema({
  query,
  mutation,
});
