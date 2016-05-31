import { Route } from "react-router";
import React from "react";

import App from "./components/App";
import Admin from "./components/Admin";

export default (
  <Route name="app" path="/" component={App}>
      <Route path="admin" component={Admin} />
  </Route>
);
