import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import { data } from "../../DevAssets/data/data";

import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import NewsPage from "../NewsPage/NewsPage";

const Landing = (props) => {
  return (
    <div className="flex flex-col flex-1 w-100	">
      <Navbar />
      <NewsPage />
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
