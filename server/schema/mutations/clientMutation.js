const ClientType = require('../types/client');
const Client = require('../../models/client');
const { GraphQLString, GraphQLID, GraphQLNonNull } = require('graphql');

const addClient = {
  type: ClientType,
  args: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    phone: { type: new GraphQLNonNull(GraphQLString) },
  },
  resolve: (parent, args) => {
    const client = new Client({
      name: args.name,
      email: args.email,
      phone: args.phone,
    });
    return client.save();
  },
};

const deleteClient = {
  type: ClientType,
  args: {
    id: { type: new GraphQLNonNull(GraphQLID) },
  },
  resolve: (parent, args) => Client.findByIdAndDelete(args.id),
};

module.exports = { addClient, deleteClient };
