import React from 'react';
import * as Styled from './styled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <Styled.NavigationItems>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </Styled.NavigationItems>
);

export default navigationItems;