import React from "react";
import { render } from "react-dom";
import { withRouter } from "react-router-dom";

import App from "./graphql-client/App";

const BrowserRouterApp = () => <App />;
export default withRouter(BrowserRouterApp);

render(<BrowserRouterApp />, document.getElementById("root"));
