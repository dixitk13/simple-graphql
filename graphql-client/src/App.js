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
import { createHttpLink } from "apollo-link-http";

import "./app.styles.scss";

// Set up Cache
const cache = new InMemoryCache();
const url =
  process.env.NODE_ENV === "development"
    ? `http://localhost:${process.env.PORT || 4000}/graphql`
    : `/graphql`;

const client = new ApolloClient({
  link: createHttpLink({
    uri: url,
  }),
  cache: cache,
});

const App = () => {
  return (
    <div className="app-container">
      <ApolloProvider client={client}>
        <Router>
          <div className="app">
            <Switch>
              <Redirect exact from="/" to="/todos" />
              <Route exact path="/todos" component={TodosList} />
              <Route exact path="/todos/:id" component={TodoDetail} />
              <Redirect from="*" to="/" />
            </Switch>
          </div>
        </Router>
      </ApolloProvider>
    </div>
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
