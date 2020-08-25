import React from 'react';
import {Burger} from "./styled";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = () => (
  <Burger>
    <BurgerIngredient type="bread-top"/>
    <BurgerIngredient type="cheese"/>
    <BurgerIngredient type="meat"/>
    <BurgerIngredient type="bread-bottom"/>
  </Burger>
);

export default burger;