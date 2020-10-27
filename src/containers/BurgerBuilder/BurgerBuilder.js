import React, { useState } from 'react'
import axios from 'axios-orders'
import Spinner from 'components/UI/Spinner/Spinner'
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import Modal from 'components/UI/Modal/Modal'
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler'
import {
  addIngredient,
  removeIngredient,
} from 'containers/BurgerBuilder/burgerSlice'
import { connect } from 'react-redux'

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false)
  const [loading] = useState(false)
  const [error] = useState(false)

  /*  useEffect(() => {
    axios
      .get('/ingredients.json')
      .then((response) => setIngredients(response.data))
      .catch(() => setError(true))
  }, [])*/

  /*  const addIngredientHandler = (type) => {
    const updatedIngredients = { ...ingredients }
    updatedIngredients[type] = ingredients[type] + 1
    setIngredients(updatedIngredients)

    setTotalPrice(totalPrice + INGREDIENT_PRICES[type])
    updatePurchasable(updatedIngredients)
  }

  const removeIngredientHandler = (type) => {
    const updatedIngredients = { ...ingredients }
    updatedIngredients[type] = ingredients[type] - 1

    if (updatedIngredients[type] < 0) {
      return
    }

    setIngredients(updatedIngredients)

    setTotalPrice(totalPrice - INGREDIENT_PRICES[type])
    updatePurchasable(updatedIngredients)
  }*/

  const orderNowHandler = () => setPurchasing(true)
  const purchaseCancelHandler = () => setPurchasing(false)
  const purchaseContinueHandler = () => {
    props.history.push('/checkout')
  }

  const disabledInfo = {
    ...props.ingredients,
  }
  for (let key in disabledInfo) {
    disabledInfo[key] = disabledInfo[key] <= 0
  }

  const orderSummary =
    loading || !props.ingredients ? (
      <Spinner />
    ) : (
      <OrderSummary
        ingredients={props.ingredients}
        price={props.price}
        purchaseCancelled={purchaseCancelHandler}
        purchaseContinued={purchaseContinueHandler}
      />
    )

  const burger = error ? (
    <p>Ingredients can't be loaded.</p>
  ) : props.ingredients ? (
    <>
      <Burger ingredients={props.ingredients} />
      <BuildControls
        ingredientAdded={props.addIngredient}
        ingredientRemoved={props.removeIngredient}
        disabled={disabledInfo}
        price={props.price}
        purchasable={props.purchasable}
        orderNowClicked={orderNowHandler}
      />
    </>
  ) : (
    <Spinner />
  )

  return (
    <>
      <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
        {orderSummary}
      </Modal>
      {burger}
    </>
  )
}

const mapStateToProps = (state) => ({
  ingredients: state.burger.ingredients,
  price: state.burger.price,
  purchasable: state.burger.purchasable,
})

const mapDispatchToProps = { addIngredient, removeIngredient }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios))
