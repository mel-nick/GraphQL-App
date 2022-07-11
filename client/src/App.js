import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const apolloClient = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});

const App = () => (
  <ApolloProvider client={apolloClient}>
    <div>App</div>
  </ApolloProvider>
);

export default App;
