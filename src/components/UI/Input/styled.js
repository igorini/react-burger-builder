import styled from "styled-components";

export const FormInput = styled.div`
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-weight: bold;
  display: block;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  outline: none;
  border: ${props => props.touched && props.invalid ? "1px solid red" : "1px solid #ccc"};
  background-color: ${props => props.touched && props.invalid ? "salmon" : "white"};
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

export const TextArea = styled.textarea`
  outline: none;
  border: ${props => props.touched && props.invalid ? "1px solid red" : "1px solid #ccc"};
  background-color: ${props => props.touched && props.invalid ? "salmon" : "white"};
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
    
  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;

export const Select = styled.select`
  outline: none;
  border: ${props => props.touched && props.invalid ? "1px solid red" : "1px solid #ccc"};
  background-color: ${props => props.touched && props.invalid ? "salmon" : "white"};
  font: inherit;
  padding: 6px 10px;
  display: block;
  width: 100%;
  box-sizing: border-box;
    
  &:focus {
    outline: none;
    background-color: #ccc;
  }
`;