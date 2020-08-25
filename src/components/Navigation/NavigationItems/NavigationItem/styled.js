import styled from "styled-components";

export const NavigationItem = styled.li`
  margin: 0;
  box-sizing: border-box;
  display: flex;
  height: 100%;
  align-items: center;
  
  & a {
    color: white;
    text-decoration: none;
    height: 100%;
    padding: 16px 10px;
    border-bottom: ${props => props.active ? "4px solid #40A4C8" : "4px solid transparent"}
    box-sizing: border-box;
    display: block;
    background-color: ${props => props.active ? "#8F5C2C" : ""}
  }
  
  & a:hover, a:active, a.active {
    background-color: #8F5C2C;
    border-bottom: 4px solid #40A4C8;
    color: white;
  }
`;