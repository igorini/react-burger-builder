import React, {useEffect, useState} from 'react';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.1,
  cheese: 0.2,
  meat: 0.4,
  bacon: 0.3
};

const BurgerBuilder = props => {
  const [ingredients, setIngredients] = useState(null);
  const [totalPrice, setTotalPrice] = useState(0.2);
  const [purchasable, setPurchasable] = useState(false);
  const [purchasing, setPurchasing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios.get('/ingredients.json')
      .then(response => setIngredients(response.data))
      .catch(() => setError(true));
  }, []);

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
  const purchaseContinueHandler = () => {
    const queryParams = [];
    for (let i in ingredients) {
      queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(ingredients[i]));
    }
    queryParams.push('price=' + totalPrice);

    const queryString = queryParams.join('&');
    props.history.push({
      pathname: '/checkout',
      search: '?' + queryString
    });
  }

  const disabledInfo = {
    ...ingredients
  };
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0;
  }

  const orderSummary = loading || !ingredients ? <Spinner/> :
    <OrderSummary
      ingredients={ingredients}
      price={totalPrice}
      purchaseCancelled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}/>;

  const burger = error ? <p>Ingredients can't be loaded.</p> : (
    ingredients ? (
      <>
        <Burger ingredients={ingredients}/>
        <BuildControls
          ingredientAdded={addIngredientHandler}
          ingredientRemoved={removeIngredientHandler}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={purchasable}
          orderNowClicked={orderNowHandler}/>
      </>) : <Spinner/>);

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  );
};

export default withErrorHandler(BurgerBuilder, axios);