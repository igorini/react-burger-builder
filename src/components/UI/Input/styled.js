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
  border: 1px solid #ccc;
  background-color: white;
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
  border: 1px solid #ccc;
  background-color: white;
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
  border: 1px solid #ccc;
  background-color: white;
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