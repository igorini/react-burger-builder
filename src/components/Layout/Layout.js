import React from 'react';
import * as Styled from './styled';

const layout = props => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Styled.Content>
      {props.children}
    </Styled.Content>
  </>
);

export default layout;