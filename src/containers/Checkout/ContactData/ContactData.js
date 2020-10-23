import React, {useState} from 'react';
import * as Styled from './styled';
import Button from "../../../components/UI/Button/Button";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";
import Input from "../../../components/UI/Input/Input";

const ContactData = props => {
  const [orderForm, setOrderForm] = useState({
    name: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Your Name'
      },
      value: ''
    },
    street: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Street'
      },
      value: ''
    },
    zipCode: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'ZIP Code'
      },
      value: ''
    },
    country: {
      elementType: 'input',
      elementConfig: {
        type: 'text',
        placeholder: 'Country'
      },
      value: ''
    },
    email: {
      elementType: 'input',
      elementConfig: {
        type: 'email',
        placeholder: 'Your Email'
      },
      value: ''
    },
    deliveryMethod: {
      elementType: 'select',
      elementConfig: {
        options: [
          {value: 'fastest', displayValue: 'Fastest'},
          {value: 'cheapest', displayValue: 'Cheapest'}
        ]
      },
      value: ''
    }
  })
  const [loading, setLoading] = useState(false);

  const orderHandler = event => {
    event.preventDefault();
    setLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.price
    }
    axios.post('/orders.json', order)
      .then(() => {
        setLoading(false);
        props.history.push('/');
      })
      .catch(() => {
        setLoading(false);
      });
  }

  const inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = {...orderForm};
    const updatedFormElement = {...updatedOrderForm[inputId]};
    updatedFormElement.value = event.target.value;
    updatedOrderForm[inputId] = updatedFormElement;
    setOrderForm(updatedFormElement);
  }

  const formElementsArray = [];
  for (let key in orderForm){
    formElementsArray.push({
      id: key,
      config: orderForm[key]
    })
  }

  const form = loading ? <Spinner/> : (
    <form>
      {formElementsArray.map(formElement =>
        <Input
          key={formElement.id}
          elementType={formElement.config.elementType}
          elementConfig={formElement.config.elementConfig}
          value={formElement.config.value}
          changed={event => inputChangedHandler(event, formElement.id)}
        />
      )}
      <Button btnType="Success" clicked={orderHandler}>ORDER</Button>
    </form>
  );

  return (
    <Styled.ContactData>
      <h4>Enter your Contact Data</h4>
      {form}
    </Styled.ContactData>
  );
};

export default ContactData;