import React from 'react';
import * as Styled from './styled';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

const layout = props => (
  <>
    <Toolbar/>
    <SideDrawer/>
    <Styled.Content>
      {props.children}
    </Styled.Content>
  </>
);

export default layout;