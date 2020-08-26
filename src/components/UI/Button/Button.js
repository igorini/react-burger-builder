import React from 'react';
import * as Styled from './styled';
import styled from "styled-components";

const StyledColoredButton = styled(Styled.Button)`
  color: ${props =>
    props.btnType === "green" ? '#5C9210' :
    props.btnType === "red" ? '#944317' : 'gray'
  };
`;

const button = props => {
  return (
    <StyledColoredButton onClick={props.clicked} btnType={props.btnType}>
      {props.children}
    </StyledColoredButton>
  );
}

export default button;