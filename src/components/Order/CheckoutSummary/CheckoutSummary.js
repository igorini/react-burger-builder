import React from 'react';
import * as Styled from './styled';
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

const CheckoutSummary = props => {
  return (
    <Styled.CheckoutSummary>
      <h1>We hope it tastes well</h1>
      <div style={{width: '100%', margin: 'auto'}}>
        <Burger ingredients={props.ingredients}/>
      </div>
      <Button
        btnType="Success"
        clicked>CONTINUE</Button>
      <Button
        btnType="Danger"
        clicked>CANCEL</Button>
    </Styled.CheckoutSummary>
  );
};

export default CheckoutSummary;