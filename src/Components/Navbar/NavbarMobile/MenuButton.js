import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsList, BsX, BsArrowLeft } from "react-icons/bs";
import { MenuButtonWrapper } from "./styles";

const MenuButton = ({ open, handleClick, subMenuOpen, setSubMenuOpen }) => {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <BsList size={40} />
    </MenuButtonWrapper>
  ) : (
    
        !subMenuOpen ? (
          <MenuButtonWrapper onClick={handleClick}>
          <BsX size={45} />
          </MenuButtonWrapper >
          )
          :
          <MenuButtonWrapper onClick={()=>setSubMenuOpen(false) }>
          <BsArrowLeft size={40} />
          </MenuButtonWrapper >
        
  );
};

MenuButton.propTypes = {};

export default MenuButton;
