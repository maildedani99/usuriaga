import React, { useState } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, MenuButtonWrapper } from "./styles";
import NavMenu from "./NavMenu";
import MenuButton from "./MenuButton";
import logo from "../../../assets/logonegro.svg";

const NavbarMobile = ({categories}) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <HeaderWrapper className=" px-4">
      <div className=" p-6 w-6/12	my-auto ">
        <img className="mx-auto" src={logo} alt="Usuriaga" width="100%" />
      </div>
      <NavMenu open={open} categories={categories} />
      <div className="mb-4 ">
        <MenuButton className="ml-2 my-auto " open={open} handleClick={handleClick} />
      </div>
    </HeaderWrapper>
  );
};

NavbarMobile.propTypes = {};

export default NavbarMobile;
