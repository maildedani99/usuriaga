import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import useResponsive from "../../Hooks/useResponsive";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  const { isDesktop } = useResponsive();

  /* const handleClick = () => {
    navigate("/productInfo", {
      state: {
        product: product,
      },
    });
  }; */
  const handleClick = (id) => {
    navigate(`/productInfo/${id}`);
  };

  return (
    <div
      className={
        isDesktop
          ? "flex flex-col w-3/12 p-4 justify-start tracking-wider	 text-[#515151]	cursor-pointer mt-8 "
          : "flex flex-col w-6/12 p-2 justify-center cursor-pointer mt-8 tracking-wider	 text-[#515151]"
      }
      onClick={()=>handleClick(product.id)}
    >
      <img src={product.images[0].url && product.images[0].url} alt="foto" />
      <span className=" text-base	 mx-auto mt-2">{product.name}</span>
      <span className=" text-base	 mx-auto mt-2 ">{product.price} €</span>
    </div>
  );
};

ProductCard.propTypes = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
  navigate: PropTypes.func,
};

export default ProductCard;
