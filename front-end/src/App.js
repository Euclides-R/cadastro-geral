import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { DefaultLayout } from "./layout";
import { Home, Accounts, Expenditure, Receipt } from "./pages";

export default function App() {
  return <Home />;
}

{
  /* <Router>
  <Routes>
    <Route exact path="/" component={Home} />
    <Route exact path="/accounts" component={Accounts} />
    <Route exact path="/expenditure" component={Expenditure} />
    <Route exact path="/receipt" component={Receipt} />
  </Routes>
</Router> */
}
