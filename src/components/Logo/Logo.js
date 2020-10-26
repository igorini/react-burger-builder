import React from 'react';
import burgerLogo from '../../assets/images/burger-logo.png';
import * as Styled from './styled';

const logo = () => (
  <Styled.Logo>
    <img src={burgerLogo} alt="MyBurger" />
  </Styled.Logo>
);

export default logo;
