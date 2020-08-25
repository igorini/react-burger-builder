import React, {useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

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
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);

  const updatePurchasable = ingredients => {
    const ingredientSum = Object.keys(ingredients)
      .map(key => ingredients[key])
      .reduce((sum, el) => sum + el, 0);
    setPurchasable(ingredientSum > 0);
  }

  const addIngredientHandler = type => {
    const updatedIngredients = {...ingredients};
    updatedIngredients[type] = ingredients[type] + 1;
    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice + INGREDIENT_PRICES[type]);
    updatePurchasable(updatedIngredients);
  }

  const removeIngredientHandler = type => {
    const updatedIngredients = {...ingredients};
    updatedIngredients[type] = ingredients[type] - 1;

    if (updatedIngredients[type] < 0) {
      return
    }

    setIngredients(updatedIngredients);

    setTotalPrice(totalPrice - INGREDIENT_PRICES[type]);
    updatePurchasable(updatedIngredients);
  }

  const orderNowHandler = () => setPurchasing(true);
  const purchaseCancelHandler = () => setPurchasing(false);

  const disabledInfo = {
    ...ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        <OrderSummary ingredients={ingredients}/>
      </Modal>
      <Burger ingredients={ingredients}/>
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemoved={removeIngredientHandler}
        disabled={disabledInfo}
        price={totalPrice}
        purchasable={purchasable}
        orderNowClicked={orderNowHandler}/>
    </>
  );
};

export default BurgerBuilder;