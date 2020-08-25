import React from 'react';
import * as Styled from './styled';

const backdrop = props => props.show ?
  <Styled.Backdrop onClick={props.clicked}/> : null;

export default backdrop;