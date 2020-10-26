import React from 'react';
import * as Styled from './styled';

const Backdrop = (props) =>
  props.show ? <Styled.Backdrop onClick={props.clicked} /> : null;

export default Backdrop;
