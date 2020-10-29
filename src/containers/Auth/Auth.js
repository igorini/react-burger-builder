import React, { useState } from 'react'
import * as Styled from './styled'
import Input from 'components/UI/Input/Input'
import Button from 'components/UI/Button/Button'
import { bindActionCreators } from 'redux'
import { actions } from 'containers/Auth/authSlice'
import { connect } from 'react-redux'
import withErrorHandler from 'hoc/withErrorHandler/withErrorHandler'
import axios from 'axios-orders'
import Spinner from 'components/UI/Spinner/Spinner'

const Auth = (props) => {
  const [controls, setControls] = useState({
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Email Address',
      },
      value: '',
      validation: {
        required: true,
        isEmail: true,
      },
      valid: false,
      touched: false,
    },
    password: {
      elementType: 'input',
      elementConfig: {
        type: 'password',
        placeholder: 'Password',
      },
      value: '',
      validation: {
        required: true,
        minLength: 6,
      },
      valid: false,
      touched: false,
    },
  })

  const [isSignUp, setIsSignUp] = useState(true)

  const inputChangedHandler = (event, controlName) => {
    const updatedControls = {
      ...controls,
      [controlName]: {
        ...controls[controlName],
        value: event.target.value,
        valid: checkValidity(event.target.value, controls[controlName]),
        touched: true,
      },
    }
    setControls(updatedControls)
  }

  const checkValidity = (value, rules) => {
    let isValid = true
    if (rules.required) {
      isValid = isValid && value.trim() !== ''
    }
    if (rules.minLength) {
      isValid = isValid && value.length >= rules.minLength
    }
    if (rules.maxLength) {
      isValid = isValid && value.length <= rules.maxLength
    }

    return isValid
  }

  const formElementsArray = []
  for (let key in controls) {
    formElementsArray.push({
      id: key,
      config: controls[key],
    })
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (isSignUp) {
      props.signUp({
        email: controls.email.value,
        password: controls.password.value,
      })
    } else {
      props.signIn({
        email: controls.email.value,
        password: controls.password.value,
      })
    }
  }

  const switchAuthModeHandler = () => setIsSignUp(!isSignUp)

  const errorMessage = props.error ? <p>{props.error.message}</p> : null

  return !props.loading ? (
    <Styled.Auth>
      {errorMessage}
      <form onSubmit={submitHandler}>
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
        <Button btnType="green">SUBMIT</Button>
      </form>
      <Button btnType="red" clicked={switchAuthModeHandler}>
        SWITCH TO {isSignUp ? 'SIGN IN' : 'SIGN UP'}
      </Button>
    </Styled.Auth>
  ) : (
    <Spinner />
  )
}

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
  error: state.auth.error,
})

const mapDispatchToProps = (dispatch) => {
  const { signUp, signIn } = bindActionCreators(actions, dispatch)
  return { signUp, signIn }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Auth, axios))
