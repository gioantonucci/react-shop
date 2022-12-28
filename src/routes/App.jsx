import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../containers/Layout";
import Login from "../containers/Login";
import RecoveryPass from "../containers/RecoveryPass";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPass} />
          <Route path="*" component={NotFound} />
        </Switch>{" "}
      </Layout>
    </BrowserRouter>
  );
};

export default App;
