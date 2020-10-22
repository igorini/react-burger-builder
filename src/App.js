import React from 'react';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import {Route, Switch} from "react-router-dom";

const app = () => (
  <div>
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" exact component={BurgerBuilder}/>
      </Switch>
    </Layout>
  </div>
);

export default app;
