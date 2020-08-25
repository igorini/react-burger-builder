import React from 'react';
import * as Styled from './styled';

const modal = props => (
  <Styled.Modal>
    {props.children}
  </Styled.Modal>
);

export default modal;