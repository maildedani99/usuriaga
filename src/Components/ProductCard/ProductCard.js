import React, { useContext } from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import useResponsive from "../../Hooks/useResponsive";
import { CartContext } from "../../Hooks/CartContext";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { cartItems, addItemToCart } = useContext(CartContext);

  const { isDesktop } = useResponsive();

  const ProductHandleClick = (id) => {
    navigate(`/productInfo/${id}`);
  };

 

  return (
    <div
      className={
        isDesktop
          ? "flex flex-col w-3/12 p-4 justify-start tracking-wider	 text-[#515151]	cursor-pointer mt-8 "
          : "flex flex-col w-6/12 p-2 justify-center cursor-pointer mt-8 tracking-wider	 text-[#515151]"
      }
      onClick={() => ProductHandleClick(product.id)}
    >
      <img src={product.images[0].url && product.images[0].url} alt="foto" />
      <span className=" text-base	 mx-auto mt-2">{product.name}</span>
      {product.discount == true && product.reduced_price !== 0 ? (
        <div className="flex  mx-auto ml-1  ">
          <span className=" text-base	mt-2 line-through mr-2">
            {product.price} €{" "}
          </span>
          <span className=" text-base	  mt-2 text-red-600  ">
            {product.reduced_price} €
          </span>
        </div>
      ) : (
        <span className=" text-base	 mx-auto mt-2 ">{product.price} €</span>
      )}
     
    </div>
  );
};

ProductCard.propTypes = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
  navigate: PropTypes.func,
};

export default ProductCard;
