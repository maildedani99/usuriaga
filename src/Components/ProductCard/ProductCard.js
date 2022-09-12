import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ info, precio, pic }) => {
  return (
    <div className="flex flex-col w-2/6 p-2 justify-center cursor-pointer ">
      <div>
        <img src={pic} alt="foto" />
      </div>
      <span className=" text-2xl mx-auto mt-4">{info}</span>
          <span className=" text-4xl mx-auto mt-4 ">{precio} €</span>
        <input type="button" value="Añadir " style={{backgroundColor:"#dac895"}} className="w-3/6 p-3 mt-4 self-center	" />
      </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
