import React from 'react';
import * as Styled from './styled';

const modal = props => (
  <Styled.Modal style ={{
    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
    opacity: props.show ? '1' : '0'
  }}>
    {props.children}
  </Styled.Modal>
);

export default modal;