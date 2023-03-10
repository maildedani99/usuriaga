import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { HeaderWrapper, MenuButtonWrapper } from "./styles";
import NavMenu from "./NavMenu";
import MenuButton from "./MenuButton";
import logo from "../../../assets/logogrisprueba.png";
import NavSubMenu from "./NavSubMenu";
import { useNavigate } from "react-router-dom";

const NavbarMobile = ({ categories }) => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(false);
  const [subCategories, setSubCategories] = useState([]);

  const switchMenuOpen = () => {
    setMenuOpen(!menuOpen);
  };
  const onSubMenuOpen = (e) => {
    setSubCategories(
      categories.find((item) => item.id == e.target.id).subcategories
    );
    setSubMenuOpen(true);
  };
  const subcategoryHandleClick = (id) => {
    navigate(`/productsView/${id}`);
  };


  const CategoriesHandleClick = (id) => {
    navigate(`/productsView/${id}`);
  };

  useEffect(() => {
  }, [subCategories]);

  return (
    <div>
      <HeaderWrapper className="flex flex-1 w-100 px-4 border-b fixed bg-white">
        <div className=" p-6 w-8/12	my-auto ">
          <img className=" my-auto " src={logo} alt="Usuriaga" width="250px" />
        </div>
        <NavMenu
          open={menuOpen}
          categories={categories}
          subMenuOpen={subMenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          onSubMenuOpen={onSubMenuOpen}
          CategoriesHandleClick={CategoriesHandleClick}
          switchMenuOpen={switchMenuOpen}
        />
        <div className=" my-auto ">
          <MenuButton
            className="ml-2  my-auto "
            open={menuOpen}
            subMenuOpen={subMenuOpen}
            setSubMenuOpen={setSubMenuOpen}
            switchMenuOpen={switchMenuOpen}
          />
        </div>
        <NavSubMenu
          subCategories={subCategories}
          open={onSubMenuOpen}
          setSubMenuOpen={setSubMenuOpen}
          subMenuOpen={subMenuOpen}
          handleClick={switchMenuOpen}
          subcategoryHandleClick={subcategoryHandleClick}
          switchMenuOpen={switchMenuOpen}
        />
      </HeaderWrapper>
    </div>
  );
};

NavbarMobile.propTypes = {};

export default NavbarMobile;
