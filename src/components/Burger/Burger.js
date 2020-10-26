import React from 'react';
import * as Styled from './styled';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) =>
      [...Array(props.ingredients[ingredientKey])].map((_, i) => (
        <BurgerIngredient key={ingredientKey + i} type={ingredientKey} />
      ))
    )
    .reduce((prev, cur) => prev.concat(cur), []);

  transformedIngredients =
    transformedIngredients.length === 0 ? (
      <p>Please add ingredients</p>
    ) : (
      transformedIngredients
    );

  return (
    <Styled.Burger>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </Styled.Burger>
  );
};

export default burger;
