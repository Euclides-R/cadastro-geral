import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { DefaultLayout } from "./layout";
import { Home, Accounts } from "./pages";

export default function App() {
  return (
     <Accounts />
    );
  }
  
  // <Router>
  //   <DefaultLayout>
  //     <Route exact path="/" component={Home} />
  //     <Route exact path="/accounts" component={Accounts} />
  //   </DefaultLayout>
  // </Router>