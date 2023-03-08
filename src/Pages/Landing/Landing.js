import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import RegisterPage from "../RegisterPage/RegisterPage";
import LoginPage from "../LoginPage/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route exact path="/" element={<NewsView />} />
            <Route exact path="/productInfo/:id" element={<ProductInfo />} />
            <Route exact path="/cartPage" element={<CartPage />} />
            <Route exact path="/newsView" element={<NewsView />} />
            <Route exact path="/outletView" element={<OutletView />} />
            <Route exact path="/discountView" element={<DiscountView />} />
            <Route exact path="/loginPage" element={<LoginPage />} />
            <Route exact path="/registerPage" element={<RegisterPage />} />
            <Route exact path="/productsView/:id" element={<ProductsView />} />
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
