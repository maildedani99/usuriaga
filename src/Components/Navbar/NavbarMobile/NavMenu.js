import React, { useState } from "react";
import PropTypes from "prop-types";
import { NavbarWrapper } from "./styles";

const NavMenu = ({ open, categories, setSubMenuOpen, subMenuOpen, onSubMenuOpen  }) => {
  const [categorySelected, setCategorySelected] = useState({});
  const [subCategoires, setSubCategories] = useState([])

  
  return (
    <NavbarWrapper open={open}>
      <div className="flex w-3/6 flex-col   mt-12 bg-white h-screen	w-screen	">
        {categories.map((category) => (
          <div
            id={category.id}
            className="text-6xl  mt-16	 text-[#1A171B] mx-6 uppercase "
            onClick={(e) => onSubMenuOpen(e)}
            >
            {category.name}
          </div>
        ))}
      </div>
    </NavbarWrapper>
     
  );
};

NavMenu.propTypes = {};

export default NavMenu;
