import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import header from '../../assets/top-ventas.jpg'
import ProductsView from "../ProductsView/ProductsView";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import CartPage from "../CartPage/CartPage";
import NewsView from "../NewsView/NewsView";

const Landing = (props) => {
  return (
    <Router>
      <div className="flex flex-col flex-1 w-100">
        <Navbar />
        
        <Routes>
          <Route exact path="/" element={<NewsView />} />
          <Route exact path="/productInfo" element={<ProductInfo />} />
          <Route exact path="/cartPage" element={<CartPage />} />
          <Route exact path="/newsView" element={<NewsView />} />
          <Route exact path="/loginPage" element={<LoginPage />} />
          <Route exact path="/registerPage" element={<RegisterPage />} />
          <Route exact path="/productsView/:id" element={<ProductsView />} />
        </Routes>
      </div>
    </Router>
  );
};

Landing.propTypes = {};

export default Landing;
