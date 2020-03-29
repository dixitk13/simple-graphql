import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Todos from "./Todos";
import TodoDetail from "./TodoDetail";
import Editor from "./Editor";
// import ProtectRoute from "./protectRoute";

import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-boost";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";

import "./app.styles.scss";

// Set up Cache
const cache = new InMemoryCache();

const client = new ApolloClient({
  cache: cache,
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
            <Redirect from="*" to="/" />
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
      <Editor />
    </>
  );
};

export default App;
