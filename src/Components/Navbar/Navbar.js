import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logonegro.png";
import logo2 from "../../assets/logonegrofull.png";
import bag from "../../assets/bag.svg";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { navLinkStyle, navLinkStyleHover } from "../../astyles/navbarStyles";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
  const activeStyleLink = {
    fontSize: "40",
  };

  return (
    <div className="flex w-full fixed flex-col bg-white	">
      <div
        className="flex  flex-1 border-b 	"
        style={{ backgroundColor: "#dac895" }}
      >
        <div className="flex flex-1 w-3/5 justify-center text-white p-1 font-light 	">
          <span>ENVÍOS GRATIS para compras superiores a 40€</span>
        </div>
      </div>
      <div
        className="flex flex-row flex-1 border-b " /* style={{backgroundColor:"#dac895"}}  */
      >
        <div className=" p-6 w-3/12	my-auto ">
          <img className="mx-auto" src={logo} alt="Usuriaga" width="250" />
        </div>
        {/*  <div className=" p-8 	">
        <img src={logo2} alt="Usuriaga" width="300" />
      </div> */}
        <div className="flex w-6/12 justify-center ">
          <div className=" self-center">
            <NavLink to="/newsPage" className="navLink">
              <span className=" mx-6   cursor-pointer hover:text-primary ">
                NOVEDADES
              </span>
            </NavLink>
              <div className="dropdown ">
            <NavLink className="navLink" to="/loginPage" >
                <div className="hover:text-primary">
                  <span className=" mx-6 cursor-pointer  ">ROPA</span>
                </div>
                </NavLink>
              <div className="dropdown-content text-sm">
              <NavLink className="navLink" to="/loginPage" >
                  <span className="hover:text-primary">TOPS / BODIES</span>
                  </NavLink>
                  <br />
                  <span className="hover:text-primary">CAMISAS / BLUSAS</span>
                  <br />
                  <span className="hover:text-primary">CAMISETAS</span>
                  <br />
                  <span className="hover:text-primary">FALDAS / SHORTS</span>
                  <br />
                  <span className="hover:text-primary">PANTALONES</span>
                  <br />
                  <span className="hover:text-primary">
                    JERSEYS / SUDADERAS
                  </span>
                  <br />
                  <span className="hover:text-primary">
                    ABRIGOS / CHAQUETAS
                  </span>
                </div>
              </div>
            
            <NavLink
              className="navLink"
              to="/loginPage">
              <div className="dropdown">
                <div className="hover:text-primary">
                  <span className="mx-6 cursor-pointer hover:text-primary">
                    ACCESORIOS
                  </span>
                </div>
                <div className="dropdown-content text-sm">
                  <NavLink
                    className="navLink"
                    to="/loginPage">
                    <span className="hover:text-primary">ZAPATOS</span>
                    <br />
                    <span className="hover:text-primary">BOLSOS</span>
                    <br />
                    <span className="hover:text-primary">COLGANTES</span>
                    <br />
                    <span className="hover:text-primary">PENDIENTES</span>
                    <br />
                    <span className="hover:text-primary">
                      BUFANDAS / FOULARES
                    </span>
                  </NavLink>
                </div>
              </div>
            </NavLink>
            <div className="dropdown">
              <div className="hover:text-primary">
                <span className="mx-6 cursor-pointer hover:text-primary">
                  COLECCIONES
                </span>
              </div>
              <div className="dropdown-content text-sm">
                <NavLink
                  className="navLink"
                  to="/loginPage">
                  <span className="hover:text-primary">NAVIDAD</span>
                  <br />
                  <span className="hover:text-primary">FIESTA</span>
                  <br />
                  <span className="hover:text-primary">EVENTOS</span>
                </NavLink>
              </div>
            </div>
            <span className="mx-6 cursor-pointer hover:text-primary">
              REBAJAS
            </span>
          </div>
        </div>
        <div className="flex  	align-middle	p-10 justify-center w-3/12 max-w-sm">
          <div
            className="flex w-4/6 justify-between	"
            onMouseEnter={() => console.log("hover ")}
          >
            <FiSearch size={28} color="#636364" />
            <NavLink
              className="navLink"
              to="/loginPage">
              <span className="cursor-pointer">
                <FiUser size={28} color="#636364" />
              </span>
            </NavLink>
            <FiShoppingCart size={28} color="#636364" />
          </div>
        </div>
      </div>
    </div>
  );
};
/* bg-neutral-100	 */

Navbar.propTypes = {};

export default Navbar;
