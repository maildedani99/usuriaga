import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { BsList, BsX } from "react-icons/bs";
import { MenuButtonWrapper } from "./styles";

const MenuButton = ({ open, handleClick }) => {
  return !open ? (
    <MenuButtonWrapper onClick={handleClick}>
      <BsList size={60} />
    </MenuButtonWrapper>
  ) : (
    <MenuButtonWrapper onClick={handleClick}>
      <BsX size={60} />
    </MenuButtonWrapper>
  );
};

MenuButton.propTypes = {};

export default MenuButton;
