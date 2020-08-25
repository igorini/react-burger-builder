import React from 'react';

const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(key =>
      <li key={key}>
        <span style={{textTransform: 'capitalize'}}>{key}</span>
        : {props.ingredients[key]}
      </li>);

  return (
    <>
      <h3>Your Order</h3>
      <p>Burger with:</p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
    </>
  );
};

export default orderSummary;