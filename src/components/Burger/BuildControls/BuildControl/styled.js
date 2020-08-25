import styled from "styled-components";

const Button = styled.button`
  display: block;
  font: inherit;
  padding: 5px;
  margin: 0 5px;
  width: 80px;
  border: 1px solid #AA6817;
  cursor: pointer;
  outline: none;
  
  &:disabled {
    background-color: #AC9980;
    border: 1px solid #7E7365;
    color: #ccc;
    cursor: default;
  }
  
  &:hover:disabled {
    background-color: #AC9980;
    color: #ccc;
    cursor: not-allowed;
  }
`

export const BuildControl = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 5px 0;
`;

export const Label = styled.div`
  padding: 10px;
  font-weight: bold;
  width: 80px;
`

export const More = styled(Button)`
  background-color: #8F5E1E;
  color: white;
  
  &:hover, &:active {
    background-color: #99703F;
    color: white;
  }
`

export const Less = styled(Button)`
  background-color: #D39952;
  color: white;
  
  &:hover, &:active {
    background-color: #DAA972;
    color: white;
  }
`
