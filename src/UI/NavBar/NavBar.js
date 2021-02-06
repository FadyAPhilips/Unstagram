import React from "react";
import styled from "styled-components";
import logo from "../../assets/logo.png";

const StyledNavBar = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 5px 20px;
  background-color: #319795;
`;
const StyledLogo = styled.img`
  align-self: center;
  display: flex;
  margin: 5px;
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <StyledLogo src={logo} alt="oops" width="auto" height="34px" />
    </StyledNavBar>
  );
};

export default Navbar;
