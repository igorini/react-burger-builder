import React, {useState} from 'react';
import * as Styled from './styled';
import Button from "../../../components/UI/Button/Button";
import axios from '../../../axios-orders';
import Spinner from "../../../components/UI/Spinner/Spinner";

const ContactData = props => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState({
    street: '',
    postalCode: ''
  });
  const [loading, setLoading] = useState(false);
  ;

  const orderHandler = event => {
    event.preventDefault();
    setLoading(true);
    const order = {
      ingredients: props.ingredients,
      price: props.price,
      customer: {
        name: 'Igor',
        address: {
          street: 'Some Street',
          zipCode: '151352',
          country: 'Ethiopia'
        },
        email: 'test@test.com'
      },
      deliveryMethod: 'fast'
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

  const form = loading ? <Spinner/> : (
    <form>
      <Styled.Input type="text" name="name" placeholder="Your Name"/>
      <Styled.Input type="email" name="email" placeholder="Your Email"/>
      <Styled.Input type="text" name="street" placeholder="Street"/>
      <Styled.Input type="text" name="postal" placeholder="Postal Code"/>
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