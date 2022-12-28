import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import Layout from "../containers/Layout";
import Login from "../pages/Login";
import RecoveryPass from "../pages/RecoveryPass";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import SendEmail from "../pages/SendEmail";
import NewPassword from "../pages/NewPassword";
import "../styles/global.css";
import MyAccount from "../pages/MyAccount";
import CreateAccount from "../pages/CreateAccount";
import Checkout from "../pages/Checkout";
import Orders from "../pages/Orders";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
      <Header/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/recovery-password" component={RecoveryPass} />
          <Route exact path="/send-email" component={SendEmail} />
          <Route exact path="/new-password" component={NewPassword} />
          <Route exact path='/my-account' component={MyAccount} />
          <Route exact path='/sign-up' component={CreateAccount} />
          <Route exact path='/check-out' component={Checkout} />
          <Route exact path='/orders' component={Orders} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
};

export default App;