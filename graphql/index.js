const { ApolloServer } = require('apollo-server-micro');

const typeDefs = require('../src/schema/typeDefs');
const resolvers = require('../src/schema/resolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

module.exports = server.createHandler();
