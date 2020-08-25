import React from 'react';
import {Bacon, BreadBottom, BreadTop, Cheese, Meat, Salad, Seeds1, Seeds2} from './styled';

const ingredientSwitch = type => ({
  'bread-bottom': <BreadBottom/>,
  'bread-top':
    <BreadTop>
      <Seeds1/>
      <Seeds2/>
    </BreadTop>,
  'meat': <Meat/>,
  'cheese': <Cheese/>,
  'bacon': <Bacon/>,
  'salad': <Salad/>
})[type]

const burgerIngredient = props => ingredientSwitch(props.type);

export default burgerIngredient;