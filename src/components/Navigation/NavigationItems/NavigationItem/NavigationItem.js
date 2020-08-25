import React from 'react';
import * as Styled from './styled';

const navigationItem = props => (
  <Styled.NavigationItem active={props.active}>
    <a href={props.link}>{props.children}</a>
  </Styled.NavigationItem>
);

export default navigationItem;