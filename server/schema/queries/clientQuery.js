const Client = require('../../models/client');
const { GraphQLID, GraphQLList } = require('graphql');
const ClientType = require('../types/client');

const getClients = {
  type: new GraphQLList(ClientType),
  resolve: (parent, args) => Client.find(),
};
const getClient = {
  type: ClientType,
  args: { id: { type: GraphQLID } },
  resolve: (parent, args) => Client.findById(id),
};

module.exports = { getClient, getClients };
