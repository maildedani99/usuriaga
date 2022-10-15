import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import { FiX } from "react-icons/fi";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="flex flex-1 border-t border-[#DAC895] ">
      <div className="my-2 w-2/12 ">
        <img src={item.pic} alt={item.pic} width="100px" />
      </div>
      <div className=" flex flex-col ml-4 text-lg w-2/6 font-medium">
        <span className="mt-4">{item.info}</span>
              <span className="mt-2">{item.precio}{" "}€</span>
      </div>
      <div className="flex flex-1 mt-4 	 ">
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      </div>
      <div className="flex  mt-4  text-lg w-1/12 justify-end	">
        <div>
          <span className="font-bold">{quantity * item.precio}{" "}€</span>
          <div className=" flex mt-4 justify-end">
            <FiX size={28} color="#636364" />
          </div>
        </div>
      </div>
    </div>
  );
};

CartItem.propTypes = {};

export default CartItem;
