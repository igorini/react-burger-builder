import React from 'react';
import Layout from "./hoc/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";

const app = () => (
  <div>
    <Layout>
      <BurgerBuilder/>
      <Checkout/>
    </Layout>
  </div>
);

export default app;
