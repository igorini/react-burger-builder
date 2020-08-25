import React from 'react';
import * as Styled from "./styled";
import BuildControl from "./BuildControl/BuildControl";

const controls = [
  { label: 'Salad' , type: 'salad' },
  { label: 'Bacon' , type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat'  , type: 'meat' },
];

const buildControls = props => (
  <Styled.BuildControls>
    {controls.map(ctrl => <BuildControl key={ctrl.label} label={ctrl.label}/>)}
  </Styled.BuildControls>
);

export default buildControls;