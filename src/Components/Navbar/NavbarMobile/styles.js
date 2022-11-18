import styled from "styled-components";

export const HeaderWrapper = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: fixed;
  top: 10vh;
  right: ${props => (props.open ? "0" : "-100%")};
  width: 100%;
  height: 90vh;
  transition: right 0.3s linear;
  a {
    padding: 0.5rem 0.8rem;
    color: grey;
    text-decoration: none;
  }
`;

export const MenuButtonWrapper = styled.button`
border: none;
margin-top: 1.3rem;
`;