import React from "react";
import PropTypes from "prop-types";
import Cart from "../../Components/Cart/Cart";
import { cartData } from "../../DevAssets/data/data";
import SummaryCart from "../../Components/SummaryCart/SummaryCart";

const CartPage = (props) => {
  return (
    <div className="flex flex-1 flex-col  mt-10 justify-center">
      <div className="flex flex-col">
        <div className="flex flex-1  text-5xl justify-center tracking-wider capitalize font-light		text-[#515151] ">
          <span className="	">Carrito</span>
        </div>
        <div className="flex flex-1 mt-20 px-16">
          <div className="flex flex-1  w-8/12 px-8 ">
                      <Cart cartData={cartData} />
          </div>
                  <div className="flex  w-4/12 px-8">
                      <SummaryCart />
          </div>
        </div>
      </div>
    </div>
  );
};

CartPage.propTypes = {
  props: PropTypes.any
};

export default CartPage;
