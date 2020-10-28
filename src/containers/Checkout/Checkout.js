import React from 'react'
import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary'
import { Redirect, Route } from 'react-router-dom'
import ContactData from 'containers/Checkout/ContactData/ContactData'
import { connect } from 'react-redux'

const Checkout = (props) => {
  const checkoutCancelledHandler = () => props.history.goBack()

  const checkoutContinuedHandler = () =>
    props.history.replace('/checkout/contact-data')

  return props.ingredients && !props.purchased ? (
    <div>
      <CheckoutSummary
        ingredients={props.ingredients}
        checkoutCancelled={checkoutCancelledHandler}
        checkoutContinued={checkoutContinuedHandler}
      />
      <Route
        path={props.match.path + '/contact-data'}
        component={ContactData}
      />
    </div>
  ) : (
    <Redirect to="/" />
  )
}

const mapStateToProps = (state) => ({
  ingredients: state.burger.ingredients,
  purchased: state.orders.purchased,
})

export default connect(mapStateToProps)(Checkout)
