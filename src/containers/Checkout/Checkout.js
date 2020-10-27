import React from 'react'
import CheckoutSummary from 'components/Order/CheckoutSummary/CheckoutSummary'
import { Route } from 'react-router-dom'
import ContactData from 'containers/Checkout/ContactData/ContactData'
import { connect } from 'react-redux'

const Checkout = (props) => {
  const checkoutCancelledHandler = () => props.history.goBack()

  const checkoutContinuedHandler = () =>
    props.history.replace('/checkout/contact-data')

  return (
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
  )
}

const mapStateToProps = (state) => ({
  ingredients: state.burger.ingredients,
})

export default connect(mapStateToProps)(Checkout)
