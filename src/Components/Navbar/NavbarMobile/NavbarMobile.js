import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, MenuButtonWrapper } from "./styles";
import NavMenu from "./NavMenu";
import MenuButton from "./MenuButton";
import logo from "../../../assets/logonegro.svg";
import NavSubMenu from "./NavSubMenu";

const NavbarMobile = ({ categories }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subCategories, setSubCategories] = useState(["dani","paco"])

  const handleClick = () => {
    setMenuOpen(!menuOpen);
  };
  const onSubMenuOpen = (e) => {
    setSubCategories(categories.find(item => item.id == e.target.id ).subcategories);
    setSubMenuOpen(true)
    console.log(e.target.id)
  }
  
  useEffect(() => {
        console.log(subCategories)
  }, [subCategories]);
  

  return (
    <div>
      <HeaderWrapper className=" px-4">
        <div className=" p-6 w-8/12	my-auto ">
          <img className="mx-auto my-auto " src={logo} alt="Usuriaga" width="100%" />
        </div>
        <NavMenu
          open={menuOpen}
          categories={categories}
          subMenuOpen={subMenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          onSubMenuOpen={onSubMenuOpen}
        />
        <div className="mb-4 my-auto ">
          <MenuButton
            className="ml-2  my-auto "
            open={menuOpen}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
            handleClick={handleClick}
          />
        </div>
      </HeaderWrapper>
      <HeaderWrapper className=" px-4">
        <NavSubMenu subCategories={subCategories} open={onSubMenuOpen} setSubMenuOpen={setSubMenuOpen} subMenuOpen={subMenuOpen} subCategories={subCategories} />
      </HeaderWrapper>
    </div>
  );
};

NavbarMobile.propTypes = {};

export default NavbarMobile;
