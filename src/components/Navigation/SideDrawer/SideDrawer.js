import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import * as Styled from './styled';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer = (props) => (
  <>
    <Backdrop show={props.open} clicked={props.closed} />
    <Styled.SideDrawer drawerAction={props.open ? 'open' : 'close'}>
      <Styled.Logo>
        <Logo />
      </Styled.Logo>
      <nav>
        <NavigationItems />
      </nav>
    </Styled.SideDrawer>
  </>
);

export default sideDrawer;
