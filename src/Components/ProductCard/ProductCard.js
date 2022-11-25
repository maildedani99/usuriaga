import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();


  const handleClick = () => {
    navigate("/productInfo", { state: product });
  };

  return (
    <div
      className="flex flex-col w-3/12 p-2 justify-center cursor-pointer mt-8"
      onClick={handleClick}
    >
      <img src={product.images[0].url && product.images[0].url} alt="foto" />
      <span className=" text-xl mx-auto mt-2">{product.name}</span>
      <span className=" text-xl mx-auto mt-2 ">{product.price} €</span>
      <input
        type="button"
        value="Añadir al carrito "
        style={{ backgroundColor: "#dac895", color: "white" }}
        className="w-2/6 p-2 mt-2 self-center	cursor-pointer"
      />
    </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
