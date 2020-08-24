import React from 'react';
import styled from "styled-components";

const Content = styled.main`
  margin-top: 16px;
`;

const layout = props => (
  <>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <Content>
      {props.children}
    </Content>
  </>
);

export default layout;