import React from 'react'
import PropTypes from 'prop-types'
import logo from "../../../assets/logonegro.svg";
import "../navbar.css";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const NavbarDesktop = ({categories}) => {
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
        <div className="flex w-6/12 justify-center ">
          <div className=" self-center">
            {categories.map((item) => (
              <div className="dropdown text-[#1A171B] hover:text-primary">
                <span className=" mx-6 uppercase   cursor-pointer navLink hover:text-primary ">
                  {item.name}
                </span>
                {item.subcategories.length > 0 && (
                  
                  <div className="dropdown-content text-[#1A171B] text-sm">
                    {item.subcategories.map((subitem) => (
                      <span className="uppercase cursor-pointer navLink hover:text-primary block">
                        {subitem.name}
                      </span>
                    ))}
                  </div>
                ) }
              </div>
            ))}
          </div>
        </div>
        <div className="flex  	align-middle	p-10 justify-center w-3/12 max-w-sm">
          <div
            className="flex w-4/6 justify-between	"
            onMouseEnter={() => console.log("hover ")}
          >
            <FiSearch size={28} color="#636364" />
            <NavLink className="navLink" to="/loginPage">
              <span className="cursor-pointer">
                <FiUser size={28} color="#636364" />
              </span>
            </NavLink>
            <NavLink className="navLink" to="/cartPage">
              <span className="cursor-pointer">
                <FiShoppingCart size={28} color="#636364" />
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

NavbarDesktop.propTypes = {}

export default NavbarDesktop