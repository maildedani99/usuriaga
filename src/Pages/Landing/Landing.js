import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route, Redirect, Navigate } from "react-router-dom";
import ProductsView from "../ProductsView/ProductsView";
import ProductInfo from "../../Components/ProductInfo/ProductInfo";
import CartPage from "../CartPage/CartPage";
import NewsView from "../NewsView/NewsView";
import OutletView from "../OutletView/OutletView";
import DiscountView from "../DiscountView/DiscountView";

const Landing = (props) => {
  return (
    <Router>
      <div className="flex flex-col flex-1 w-100">
        <Navbar />
        <div className="mt-36">
          <Routes>
            <Route exact path="/" element={  <Navigate to="/productsView/novelties" replace={true} />} />
            <Route exact path="/productsView/:id" element={<ProductsView />} />
            <Route exact path="/productInfo/:id" element={<ProductInfo />} />
            <Route exact path="/cartPage" element={<CartPage />} />
            <Route exact path="/loginPage" element={<LoginPage />} />
            <Route exact path="/registerPage" element={<RegisterPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

Landing.propTypes = {
  props: PropTypes.any,
};

export default Landing;
