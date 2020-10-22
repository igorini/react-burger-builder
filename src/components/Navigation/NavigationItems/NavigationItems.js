import React from 'react';
import * as Styled from './styled';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = () => (
  <Styled.NavigationItems>
    <NavigationItem link="/" exact>Burger Builder</NavigationItem>
    <NavigationItem link="/orders">Orders</NavigationItem>
  </Styled.NavigationItems>
);

export default navigationItems;