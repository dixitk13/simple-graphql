import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todos from "./Todos";
// import ProtectRoute from "./protectRoute";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloLink } from "apollo-client-preset";

// Set up Cache
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  link: ApolloLink.from([]),
  cache: cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Todos />
      </ApolloProvider>
    );
  }
}

export default App;
