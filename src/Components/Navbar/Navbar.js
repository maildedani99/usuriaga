import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/logonegro.png";
import logo2 from "../../assets/logonegrofull.png";
import bag from "../../assets/bag.svg";
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi";
import { IconName } from "react-icons/bi";

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
        <div className=" p-6 	">
          <img src={logo} alt="Usuriaga" width="300" />
        </div>
        {/*  <div className=" p-8 	">
        <img src={logo2} alt="Usuriaga" width="300" />
      </div> */}
        <div className="flex w-3/5 justify-center">
          <div className=" self-center">
            <span className="mx-6">NOVEDADES</span>
            <span className="mx-6">COLECCION</span>
            <span className="mx-6">ZAPATOS</span>
            <span className="mx-6">REBAJAS</span>
          </div>
        </div>
        <div className="flex flex-1 	align-middle	p-10 justify-center">
          <div className="flex w-3/6 justify-between	">
            <FiSearch size={28} color="#636364" />
            <FiUser size={28} color="#636364" />
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
