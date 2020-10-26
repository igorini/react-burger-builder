import React from 'react'
import * as Styled from './styled'

const Order = (props) => {
  const ingredients = []
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    })
  }

  const ingredientOutput = ingredients.map((ig) => (
    <span
      style={{
        textTransform: 'capitalize',
        display: 'inline-block',
        margin: '0 8px',
        border: '1px solid #ccc',
        padding: '5px',
      }}
      key={ig.name}
    >
      {ig.name} ({ig.amount})
    </span>
  ))

  return (
    <Styled.Order>
      <p>Ingredients: {ingredientOutput}</p>
      <p>
        Price: <strong>$ {props.price.toFixed(2)}</strong>
      </p>
    </Styled.Order>
  )
}

export default Order
