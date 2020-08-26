import React from 'react';
import * as Styled from './styled';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = props => (
  <Styled.Toolbar>
    <DrawerToggle clicked={props.drawerToggleClicked}/>
    <Styled.Logo>
      <Logo/>
    </Styled.Logo>
    <Styled.DesktopOnly>
      <NavigationItems/>
    </Styled.DesktopOnly>
  </Styled.Toolbar>
);

export default toolbar;