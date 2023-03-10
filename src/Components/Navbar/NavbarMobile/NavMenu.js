import React from "react";
import PropTypes from "prop-types";
import { NavbarWrapper } from "./styles";

const NavMenu = ({
  open,
  categories,
  onSubMenuOpen,
  switchMenuOpen,
  CategoriesHandleClick,
}) => {
  const onClickCategories = (id) => {
    CategoriesHandleClick(id);
    switchMenuOpen();
  };


  return (
    <NavbarWrapper open={open}>
      <div className="flex w-3/6 flex-col   mt-8 bg-white h-screen	w-screen	">
        <div className="text-6xl  mt-16	 text-[#282828] mx-6 capitalize cursor-pointer">
          <span id="novelties" onClick={(e) => onClickCategories(e.target.id)}>
            Novedades
          </span>
        </div>
        {categories.map(
          (category) =>
            category.subcategories.length > 0 && (
              <div
                key={category.id}
                className="text-6xl  mt-16	 text-[#282828] capitalize mx-6  cursor-pointer"
              >
                <span id={category.id} onClick={(e) => onSubMenuOpen(e)}>
                  {category.name}
                </span>
              </div>
            )
        )}
        <div className="text-6xl  mt-16	 text-[#282828] mx-6 capitalize cursor-pointer">
          <span
            id="discount"
            onClick={(e) => onClickCategories(e.target.id)}
          >
            Rebajas
          </span>
        </div>{" "}
        <div className="text-6xl  mt-16	 text-[#282828] mx-6 capitalize cursor-pointer">
          <span id="outlet" onClick={(e) => onClickCategories(e.target.id)}>
            Outlet
          </span>
        </div>
      </div>
    </NavbarWrapper>
  );
};

NavMenu.propTypes = {};

export default NavMenu;
