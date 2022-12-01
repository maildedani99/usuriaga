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
      <div className="flex w-3/6 flex-col   mt-8 bg-white h-screen	w-screen	">
        <div
          className="text-6xl  mt-16	 text-[#282828] mx-6 capitalize cursor-pointer"
          onClick={onClickNovelties}
        >
          <span>Novedades</span>
        </div>
        {categories.map(
          (category) =>
            category.subcategories.length > 0 && (
              <div
                key={category.id}
                id={category.id}
                className="text-6xl  mt-16	 text-[#282828] capitalize mx-6  cursor-pointer"
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
