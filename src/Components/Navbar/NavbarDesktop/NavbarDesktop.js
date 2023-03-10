import React from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/logogrisprueba.png";
import "../navbar.css";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { NavLink, useNavigate } from "react-router-dom";

const NavbarDesktop = ({ categories }) => {
  const navigate = useNavigate();

 

  const CategoriesHandleClick = (id) => {
    navigate(`/productsView/${id}`);
  };

  return (
    <div className="flex w-full fixed flex-col bg-white	">
      <div
        className="flex  flex-1 border-b 	"
        style={{ backgroundColor: "#dac895" }}
      >
        <div className="flex flex-1 w-3/5 justify-center  p-1 	 tracking-widest ">
          <span className="">ENVÍOS GRATIS para compras superiores a 60€</span>
        </div>
      </div>
      <div className="flex flex-row flex-1 border-b">
        <div className=" p-6 w-2/12	my-auto ">
          <img className="mx-auto" src={logo} alt="Usuriaga" width="250" />
        </div>
        <div className="flex w-8/12 justify-center capitalize tracking-wide text-lg font-[400]		 ">
          <div className=" self-center">
            <div className="dropdown  hover:text-primary">
              <div className="bg-[#dac895] rounded-full ">
                <span
                  id="novelties"
                  onClick={(e) => CategoriesHandleClick(e.target.id)}
                  className=" mx-6   cursor-pointer navLink hover:text-white  "
                >
                  Novedades
                </span>
              </div>
            </div>
            {categories.map((category) => (
              <div key={category.id} className="dropdown  hover:text-primary">
                {category.subcategories.length > 0 &&
                  category.name !== "Outlet" && (
                    <span className=" mx-6  cursor-pointer navLink hover:text-primary ">
                      {category.name}
                    </span>
                  )}
                {category.subcategories.length > 0 && (
                  <div className="dropdown-content  text-sm">
                    {category.subcategories.map((subcategory) => (
                      <span
                        key={subcategory.id}
                        id={subcategory.id}
                        onClick={(e) => CategoriesHandleClick(e.target.id)}
                        className=" cursor-pointer navLink hover:text-primary block"
                      >
                        {subcategory.name}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="dropdown  hover:text-primary">
              <div className="	">
                <span
                  className=" mx-6   cursor-pointer navLink hover:text-primary "
                  id="discount"
                  onClick={(e) => CategoriesHandleClick(e.target.id)}
                >
                  Rebajas
                </span>
              </div>
            </div>
            <div className="dropdown  hover:text-primary" name="/outletView">
              <span
                id="outlet"
                className=" mx-6   cursor-pointer navLink hover:text-primary "
                onClick={(e) => CategoriesHandleClick(e.target.id)}
              >
                Outlet
              </span>
            </div>
          </div>
        </div>
        <div className="flex  	py-10 px-4 justify-between w-2/12 max-w-sm opacity-70">
          <div
            className="flex flex-1 w-4/6 justify-between max-w-[225px]	"
            onMouseEnter={() => console.log("hover ")}
          >
            <FiSearch size={25} color="#636364" />
            <NavLink className="navLink" to="/loginPage">
              <span className="cursor-pointer">
                <FiUser size={25} color="#636364" />
              </span>
            </NavLink>
            <NavLink className="navLink" to="/cartPage">
              <span className="cursor-pointer">
                <FiShoppingCart size={25} color="#636364" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

NavbarDesktop.propTypes = {};

export default NavbarDesktop;
