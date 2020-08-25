import React from 'react';
import {Content} from './styled';

const layout = props => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Content>
      {props.children}
    </Content>
  </>
);

export default layout;