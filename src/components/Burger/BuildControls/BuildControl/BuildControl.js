import React from 'react';
import * as Styled from "./styled";

const buildControl = props => (
  <Styled.BuildControl>
    <Styled.Label>{props.label}</Styled.Label>
    <Styled.More>More</Styled.More>
    <Styled.Less>Less</Styled.Less>
  </Styled.BuildControl>
);

export default buildControl;