import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavbarWrapper } from "./styles";

const NavSubMenu = ({ open, subCategories, subMenuOpen, setSubMenuOpen }) => {
  return (
      <NavbarWrapper open={subMenuOpen}>
      <div className="flex w-3/6 flex-col   mt-12 bg-white h-screen	w-screen	">
        {subCategories && subCategories.map((subCategory) => (
          <div
            id={subCategory.id}
            className="text-6xl  mt-16	 text-[#1A171B] mx-6 uppercase "
            onClick={(e) => setSubMenuOpen(false)}
            >
            {subCategory.name}
          </div>
        ))}
      </div>
      </NavbarWrapper>
  );
};

NavSubMenu.propTypes = {};

export default NavSubMenu;
