import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayouts";

import { Home } from "./pages";

export default function App() {
  return (
      <Router>
        <DefaultLayout>
          <Route exact path='/' component={Home} />
        </DefaultLayout>
      </Router>
  );
};
