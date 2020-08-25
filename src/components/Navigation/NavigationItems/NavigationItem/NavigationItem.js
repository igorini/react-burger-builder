import React from 'react';
import * as Styled from './styled';

const navigationItem = props => (
  <Styled.NavigationItem active={props.active}>
    <strong><a href={props.link}>{props.children}</a></strong>
  </Styled.NavigationItem>
);

export default navigationItem;