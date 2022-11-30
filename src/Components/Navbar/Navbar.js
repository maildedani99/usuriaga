import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile/NavbarMobile";
import useResponsive from "../../Hooks/useResponsive";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const { isDesktop, isMobile} = useResponsive()

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/categories/all";
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
        console.log(categories);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div>
      {isDesktop && <NavbarDesktop categories={categories} /> }
        {isMobile && <NavbarMobile categories={categories} />}
    </div>
    )
};

Navbar.propTypes = {};

export default Navbar;
