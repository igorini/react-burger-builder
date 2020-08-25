import React from 'react';
import * as Styled from "./styled";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = props => {
  const transformedIngredients = Object.keys(props.ingredients)
    .map(ingredientKey =>
      [...Array(props.ingredients[ingredientKey])].map((_, i) =>
        <BurgerIngredient key={ingredientKey + i} type={ingredientKey}/>
      )
    )

  return (
    <Styled.Burger>
      <BurgerIngredient type="bread-top"/>
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom"/>
    </Styled.Burger>
  );
}

export default burger;