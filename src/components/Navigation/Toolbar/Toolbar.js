import React from 'react';
import * as Styled from './styled';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
  <Styled.Toolbar>
    <div>MENU</div>
    <Logo/>
    <nav>
      <NavigationItems/>
    </nav>
  </Styled.Toolbar>
);

export default toolbar;