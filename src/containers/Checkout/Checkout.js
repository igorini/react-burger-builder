import React, { useState } from 'react';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route } from 'react-router-dom';
import ContactData from './ContactData/ContactData';
import { useComponentWillMount } from '../../utils/componentWillMount';

const Checkout = (props) => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(0);

  useComponentWillMount(() => {
    const query = new URLSearchParams(props.location.search);
    const newIngredients = {};
    let newPrice = 0;
    for (let param of query.entries()) {
      if (param[0] === 'price') {
        newPrice = param[1];
      } else {
        newIngredients[param[0]] = +param[1];
      }
    }
    setIngredients(newIngredients);
    setPrice(newPrice);
  });

  const checkoutCancelledHandler = () => props.history.goBack();

  const checkoutContinuedHandler = () =>
    props.history.replace('/checkout/contact-data');

  return (
    <div>
      <CheckoutSummary
        ingredients={ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        render={(props) => (
          <ContactData ingredients={ingredients} price={price} {...props} />
        )}
      />
    </div>
  );
};

export default Checkout;
