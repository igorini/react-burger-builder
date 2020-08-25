import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.2,
  meat: 0.5,
  bacon: 0.3
};

const BurgerBuilder = () => {
  const [ingredients, setIngredients] = useState({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0
  });

  const [totalPrice, setTotalPrice] = useState(0.2);

  const addIngredientHandler = type => {
    const updatedIngredients = {...ingredients};
    updatedIngredients[type] = ingredients[type] + 1;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
  }

  const removeIngredientHandler = type => {
    const updatedIngredients = {...ingredients};
    updatedIngredients[type] = ingredients[type] - 1;

    if (updatedIngredients[type] < 0) { return }

    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
  }

  const disabledInfo = {
    ...ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Burger ingredients={ingredients}/>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        price={totalPrice}/>
    </>
  );
};

export default BurgerBuilder;