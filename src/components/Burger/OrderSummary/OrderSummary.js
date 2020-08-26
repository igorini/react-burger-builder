import React from 'react';
import Button from '../../UI/Button/Button';

const OrderSummary = props => {
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
      <p><strong>Total Price: ${props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout?</p>
      <Button btnType="green" clicked={props.purchaseContinued}>Continue</Button>
      <Button btnType="red" clicked={props.purchaseCancelled}>Cancel</Button>
    </>
  );
};

export default OrderSummary;