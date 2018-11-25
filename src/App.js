import React, { Component } from "react";
// import { BrowserRouter, Route, Switch } from "react-router-dom";
import Todos from "./Todos";
import Box from "./Box";
// import ProtectRoute from "./protectRoute";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import "./app.styles.scss";

// Set up Cache
const cache = new InMemoryCache();

const client = new ApolloClient({
  link: new HttpLink({ uri: "http://localhost:4000/graphql" }),
  cache: cache
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="app-container">
          <Todos />
          <Box />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;