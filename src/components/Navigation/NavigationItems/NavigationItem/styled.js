import styled from 'styled-components'

export const NavigationItem = styled.li`
  margin: 10px 0;
  box-sizing: border-box;
  display: block;
  width: 100%;

  & a {
    color: ${(props) => (props.active ? '#40A4C8' : '#8F5C2C')};
    text-decoration: none;
    width: 100%;
    box-sizing: border-box;
    display: block;
  }

  & a:hover,
  a:active,
  a.active {
    color: #40a4c8;
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
      border-bottom: ${(props) =>
        props.active ? '4px solid #40A4C8' : '4px solid transparent'};
      background-color: ${(props) => (props.active ? '#8F5C2C' : '')};
    }

    & a:hover,
    a:active,
    a.active {
      background-color: #8f5c2c;
      border-bottom: 4px solid #40a4c8;
      color: white;
    }
  }
`
