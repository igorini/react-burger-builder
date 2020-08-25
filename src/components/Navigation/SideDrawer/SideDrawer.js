import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as Styled from './styled';

const sideDrawer = () => (
  <Styled.SideDrawer>
    <Logo/>
    <nav>
      <NavigationItems/>
    </nav>
  </Styled.SideDrawer>
);

export default sideDrawer;