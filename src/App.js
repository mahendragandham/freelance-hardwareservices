import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro";

import ComponentRenderer from "ComponentRenderer.js";
import MainLandingPage from "MainLandingPage.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HostingCloudLandingPage from "demos/HostingCloudLandingPage";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/components/:type/:subtype/:name">
        {/* <Route path="/"> */}
          <ComponentRenderer />
        </Route>
        <Route path="/components/:type/:name">
        {/* <Route path="/"> */}
          <ComponentRenderer />
        </Route>
        <Route path="/">
          <HostingCloudLandingPage />
        </Route>
      </Switch>
    </Router>
  );
}


