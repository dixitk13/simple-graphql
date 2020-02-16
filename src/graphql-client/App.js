import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";
import Todos from "./Todos";
import TodoDetail from "./TodoDetail";
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

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container">
          <Switch>
            <Redirect exact from="/" to="/todos" />
            <Route exact path="/todos" component={TodosList} />
            <Route exact path="/todos/:id" component={TodoDetail} />
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
};
const TodosList = () => {
  return (
    <>
      <Todos />
      <Box />
    </>
  );
};

export default App;
