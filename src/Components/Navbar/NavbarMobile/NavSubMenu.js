import React from "react";
import PropTypes from "prop-types";
import { NavbarWrapper } from "./styles";

const NavSubMenu = ({
  subCategories,
  subMenuOpen,
  setSubMenuOpen,
  subcategoryHandleClick,
  switchMenuOpen
}) => {

  const onClickSubCategory = (id) => {
    subcategoryHandleClick(id)
    setSubMenuOpen(false)
    switchMenuOpen()
  };

  return (
    <NavbarWrapper open={subMenuOpen}>
      <div className="flex w-3/6 flex-col text-[#282828] capitalize  mt-8 bg-white h-screen	w-screen	">
        {subCategories &&
          subCategories.map((subCategory) => (
            <div
              key={subCategory.id}
              id={subCategory.id}
              className="text-6xl mt-16 mx-6 capitalize cursor-pointer"
              onClick={(e) => onClickSubCategory(e.target.id)}
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
