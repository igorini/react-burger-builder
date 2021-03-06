import React from 'react'
import Button from 'components/UI/Button/Button'
import _ from 'lodash'

const OrderSummary = (props) => {
  const ingredientSummary = !_.isEmpty(props.ingredients)
    ? Object.keys(props.ingredients).map((key) => (
        <li key={key}>
          <span style={{ textTransform: 'capitalize' }}>{key}</span>:{' '}
          {props.ingredients[key]}
        </li>
      ))
    : null

  return (
    <>
      <h3>Your Order</h3>
      <p>Burger with:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total Price: ${props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="green" clicked={props.purchaseContinued}>
        Continue
      </Button>
      <Button btnType="red" clicked={props.purchaseCancelled}>
        Cancel
      </Button>
    </>
  )
}

export default OrderSummary
