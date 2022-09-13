import React, { useState } from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logonegro.png";
import logo2 from "../../assets/logonegrofull.png";
import bag from "../../assets/bag.svg";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { navLinkStyle, navLinkStyleHover } from "../../astyles/navbarStyles";
import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = (props) => {
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
          
            <Link to="/newsPage">
              <span className="mx-6 cursor-pointer">NOVEDADES</span>
            </Link>
            <Link to="/loginPage">
              <div className="dropdown">
                <span className="mx-6 cursor-pointer">ROPA</span>
                <div className="dropdown-content">
                  <Link to="/loginPage">
                    <span>TOPS/BODIES</span><br/>
                    <span>CAMISAS</span><br/>
                    <span>CAMISETAS</span><br/>
                    <span>FALDAS / SHORTS</span><br/>
                    <span>PANTALONES</span>
                  </Link>
                  
                </div>
              </div>
            </Link>
            <span className="mx-6 cursor-pointer">ACCESORIOS</span>
            <span className="mx-6 cursor-pointer">REBAJAS</span>
            <span className="mx-6 cursor-pointer">COLECCIONES</span>
          </div>
        </div>
        <div className="flex  	align-middle	p-10 justify-center w-3/12 max-w-sm">
          <div
            className="flex w-4/6 justify-between	"
            onMouseEnter={() => console.log("hover ")}
          >
            <FiSearch size={28} color="#636364" />
            <Link to="/loginPage">
              <span className="cursor-pointer">
                <FiUser size={28} color="#636364" />
              </span>
            </Link>
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
