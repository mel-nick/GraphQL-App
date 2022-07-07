const Client = require('../../models/client');
const ClientType = require('./client');
const { GraphQLObjectType, GraphQLID, GraphQLString } = require('graphql');

const ProjectType = new GraphQLObjectType({
  name: 'Project',
  fields: () => ({
    id: { type: GraphQLID },
    clientId: { type: GraphQLString },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    status: { type: GraphQLString },
    client: {
      type: ClientType,
      resolve: (parent, args) => Client.findById(parent.clientId),
    },
  }),
});

module.exports = ProjectType;
