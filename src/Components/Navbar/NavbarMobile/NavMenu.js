import React from "react";
import PropTypes from "prop-types";
import { NavbarWrapper } from "./styles";

const NavMenu = ({
  open,
  categories,
  onSubMenuOpen,
  switchMenuOpen,
  NewsHandleClick,
}) => {

  const onClickNovelties = () => {
    NewsHandleClick();
    switchMenuOpen();
  };

  return (
    <NavbarWrapper open={open}>
      <div className="flex w-3/6 flex-col   mt-12 bg-white h-screen	w-screen	">
        <div
          className="text-6xl  mt-16	 text-[#1A171B] mx-6 uppercase cursor-pointer"
          onClick={onClickNovelties}
        >
          <span>Novedades</span>
        </div>
        {categories.map(
          (category) =>
            category.subcategories.length > 0 && (
              <div
                id={category.id}
                className="text-6xl  mt-16	 text-[#1A171B] mx-6 uppercase cursor-pointer"
                onClick={(e) => onSubMenuOpen(e)}
              >
                {category.name}
              </div>
            )
        )}
      </div>
    </NavbarWrapper>
  );
};

NavMenu.propTypes = {};

export default NavMenu;
