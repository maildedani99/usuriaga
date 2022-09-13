import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NewsPage from "../NewsPage/NewsPage";

const Landing = (props) => {
  return (
    <Router>
      <div className="flex flex-col flex-1 w-100	">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<NewsPage />} />
          <Route exact path="/newsPage" element={<NewsPage />} />
          <Route exact path="/loginPage" element={<LoginPage />} />
          <Route exact path="/registerPage" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
};

Landing.propTypes = {};

export default Landing;
