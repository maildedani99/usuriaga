import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import useResponsive from "../../Hooks/useResponsive";
import { CONECTION_API } from "../../routes/routes";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { isDesktop, isMobile} = useResponsive()

  useEffect(() => {
    const url = CONECTION_API + "categories/all";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setCategories(payload);
      })
      .catch((error) => console.log(error));
  }, []);



  return (
    <div className="z-40">
      {isDesktop && <NavbarDesktop categories={categories} /> }
        {isMobile && <NavbarMobile categories={categories} />}
    </div>
    )
};

Navbar.propTypes = {};

export default Navbar;
