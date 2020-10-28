import React, { useEffect, useState } from 'react'
import axios from 'axios-orders'
import Spinner from 'components/UI/Spinner/Spinner'
import OrderSummary from 'components/Burger/OrderSummary/OrderSummary'
import Burger from 'components/Burger/Burger'
import BuildControls from 'components/Burger/BuildControls/BuildControls'
import Modal from 'components/UI/Modal/Modal'
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler'
import {
  addIngredient,
  fetchIngredients,
  removeIngredient,
} from 'containers/BurgerBuilder/burgerSlice'
import { connect, useDispatch } from 'react-redux'

const BurgerBuilder = (props) => {
  const [purchasing, setPurchasing] = useState(false)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(props.fetchIngredients)
  }, [dispatch])

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

  const orderSummary = (
    <OrderSummary
      ingredients={props.ingredients}
      price={props.price}
      purchaseCancelled={purchaseCancelHandler}
      purchaseContinued={purchaseContinueHandler}
    />
  )

  const burger = props.error ? (
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
  error: state.burger.error,
})

const mapDispatchToProps = { addIngredient, removeIngredient, fetchIngredients }

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios))
