import React from 'react';
import * as Styled from './styled';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
  <Styled.Toolbar>
    <div>MENU</div>
    <Styled.Logo>
      <Logo/>
    </Styled.Logo>
    <Styled.DesktopOnly>
      <NavigationItems/>
    </Styled.DesktopOnly>
  </Styled.Toolbar>
);

export default toolbar;