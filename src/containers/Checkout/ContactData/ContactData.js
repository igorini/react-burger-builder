import React, { useState } from 'react'
import * as Styled from './styled'
import axios from 'axios-orders'
import Spinner from 'components/UI/Spinner/Spinner'
import Input from 'components/UI/Input/Input'
import Button from 'components/UI/Button/Button'
import { connect } from 'react-redux'
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler'
import { bindActionCreators } from 'redux'
import { actions } from 'containers/Orders/ordersSlice'
import { checkValidity } from 'utils/validation'

const ContactData = (props) => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    zipCode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code',
      },
      value: '',
      validation: {
        required: true,
        minLength: 5,
        maxLength: 5,
      },
      valid: false,
      touched: false,
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email',
      },
      value: '',
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          { value: 'fastest', displayValue: 'Fastest' },
          { value: 'cheapest', displayValue: 'Cheapest' },
        ],
      },
      value: 'fastest',
      validation: {},
      valid: true,
    },
  })
  const [formValid, setFormValid] = useState(false)

  const orderHandler = (event) => {
    event.preventDefault()
    const formData = {}
    for (let formElementId in orderForm) {
      formData[formElementId] = orderForm[formElementId].value
    }
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      orderData: formData,
      userId: props.userId,
    }

    props.purchaseBurger({ token: props.token, order: order })
  }

  const inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = { ...orderForm }
    const updatedFormElement = { ...updatedOrderForm[inputId] }
    updatedFormElement.value = event.target.value
    updatedFormElement.valid = checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    )
    updatedFormElement.touched = true
    updatedOrderForm[inputId] = updatedFormElement

    setFormValid(!Object.values(updatedOrderForm).some((el) => !el.valid))
    setOrderForm(updatedOrderForm)
  }

  const formElementsArray = []
  for (let key in orderForm) {
    formElementsArray.push({
      id: key,
      config: orderForm[key],
    })
  }

  const form = props.loading ? (
    <Spinner />
  ) : (
    <form onSubmit={orderHandler}>
      {formElementsArray.map((formElement) => (
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          invalid={!formElement.config.valid}
          touched={formElement.config.touched}
          changed={(event) => inputChangedHandler(event, formElement.id)}
        />
      ))}
      <Button btnType="green" disabled={!formValid}>
        ORDER
      </Button>
    </form>
  )

  return (
    <Styled.ContactData>
      <h4>Enter your Contact Data</h4>
      {form}
    </Styled.ContactData>
  )
}

const mapStateToProps = (state) => ({
  ingredients: state.burger.ingredients,
  price: state.burger.price,
  loading: state.orders.purchaseLoading,
  token: state.auth.token,
  userId: state.auth.userId,
})

const mapDispatchToProps = (dispatch) => {
  const { purchaseBurger } = bindActionCreators(actions, dispatch)
  return { purchaseBurger }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(ContactData, axios))
