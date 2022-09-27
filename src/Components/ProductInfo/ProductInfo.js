import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import pic from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG";
import { item } from "../../DevAssets/data/data";
import { FiPlus, FiMinus } from "react-icons/fi";

const ProductInfo = (props) => {
  const [quantity, setQuantity] = useState(1);

  const handlePlus = () => {
    setQuantity(quantity + 1);
  };
  const handleMinus = () => {
    quantity > 1 && setQuantity(quantity - 1);
  };

  return (
    <div className="flex  w-2/3  mt-48 mx-auto justify-center ">
      <div className=" flex 	w-1/2 	">
        <div className="mx-auto">
          <img src={item.pic} alt="" />
        </div>
      </div>
      <div className="text-2xl flex flex-col	w-1/2 	">
        <div className="flex flex-col p-8 text-justify mx-auto	w-5/6">
          <span className="text-3xl mt-4">{item.info}</span>
          <span className="text-xl mt-4">{item.precio}€</span>
          <span className="text-sm text-slate-500	mt-4">
            {item.descripcion}{" "}
          </span>
        </div>
        <div className="mx-auto text-slate-500">
          <div className="flex border px-5 py-3 my-auto">
            <FiMinus
              size={18}
              color="#636364"
              className="mt-1.5 cursor-pointer"
              onClick={handleMinus}
            />
            <span className="mx-6 select-none">{quantity}</span>
            <FiPlus
              size={18}
              color="#636364"
              className="mt-1.5"
              onClick={handlePlus}
            />
          </div>
        </div>
        <input
          className="mt-16 p-4 text-xl text-white w-4/6 mx-auto text-center mb-8 capitalize"
          value="Comprar"
          style={{ backgroundColor: "#dac895" }}
        />
      </div>
    </div>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
