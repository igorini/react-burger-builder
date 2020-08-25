import React from 'react';
import * as Styled from './styled';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout = props => (
  <>
    <Toolbar/>
    <Styled.Content>
      {props.children}
    </Styled.Content>
  </>
);

export default layout;