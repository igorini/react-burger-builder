import styled from "styled-components";

export const NavigationItem = styled.li`
  margin: 10px 0;
  display: block;
  width: 100%;
  
  & a {
    color: #8F5C2C;
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
    background-color: ${props => props.active ? "#8F5C2C" : ""};
  }
  
  & a:hover, a:active, a.active {
    color: #40A4C8;
  }
  
  @media (min-width: 500px) {
    margin: 0;
    display: flex;
    height: 100%;
    width: auto;
    align-items: center;
    
    & a {
      color: white;
      height: 100%;
      padding: 16px 10px;
      border-bottom: ${props => props.active ? "4px solid #40A4C8" : "4px solid transparent"};
      background-color: ${props => props.active ? "#8F5C2C" : ""};
    }
    
    & a:hover, a:active, a.active {
      background-color: #8F5C2C;
      border-bottom: 4px solid #40A4C8;
      color: white;
    }
  }
`;