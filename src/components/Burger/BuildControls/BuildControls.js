import React from 'react'
import * as Styled from './styled'
import BuildControl from './BuildControl/BuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
]

const BuildControls = (props) => (
  <Styled.BuildControls>
    <p>
      Current Price: <strong>${props.price.toFixed(2)}</strong>
    </p>
    {controls.map((ctrl) => (
      <BuildControl
        key={ctrl.label}
        label={ctrl.label}
        added={() => props.ingredientAdded(ctrl.type)}
        removed={() => props.ingredientRemoved(ctrl.type)}
        disabled={props.disabled[ctrl.type]}
      />
    ))}
    <Styled.OrderButton
      disabled={!props.purchasable}
      onClick={props.orderNowClicked}
    >
      {props.signedIn ? 'ORDER NOW' : 'SIGN IN TO ORDER'}
    </Styled.OrderButton>
  </Styled.BuildControls>
)

export default BuildControls
