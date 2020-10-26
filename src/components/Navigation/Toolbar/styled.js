import styled from 'styled-components';

export const Toolbar = styled.header`
  height: 56px;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #703b09;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  z-index: 90;

  &nav {
    height: 100%;
  }
`;

export const Logo = styled.div`
  height: 80%;
`;

export const DesktopOnly = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`;
