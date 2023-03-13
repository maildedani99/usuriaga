import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { Carousel } from "react-responsive-carousel";
import { CartContext } from "../../../Hooks/CartContext";

const DesktopLayout = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const AddItemToCartHandleClick = (event) => {
    event.stopPropagation();
    addItemToCart(product);
  };

  return (
    <div className="flex  w-5/6  mt-16 mx-auto justify-evenly 	 	text-[#636364]">
      <div className=" flex 	w-5/12  top-10 ">
        <Carousel useKeyboardArrows={false}>
          {product.images &&
            product.images.map((image) => (
              <img key={image.id} src={image.url} alt="foto" />
            ))}
        </Carousel>
      </div>
      <div className="text-2xl flex flex-col 	w-2/6 ">
        <div className="flex flex-col p-8 text-justify mx-auto 	w-6/6 ">
          <span className="text-3xl font-medium mt-4">{product.name}</span>
          <span className="text-lg font-medium mt-4">{product.price}€</span>
          <span className="   font-body text-base tracking-wider	font-light	  	mt-4">
            {product.description}
          </span>
          <div className="flex flex-col  w-6/6 mt-8 text-lg font-medium ">
            Tallas
            <div className="flex   ">
              {product.sizes &&
                product.sizes.map((size) => (
                  <div
                    key={size.id}
                    className="border mr-3 p-2 mt-2 font-normal
                  "
                  >
                    <span className="mr-3  mx-auto "> {size.name} </span>
                  </div>
                ))}
            </div>
            <div className="flex "></div>
          </div>
        </div>
        <div className="flex w-5/6 p-8 mx-auto">
          <input
            className=" flex flex-1 p-4 text-xl text-white  cursor-pointer text-center mb-8 capitalize "
            defaultValue="Comprar"
            readOnly
            onClick={AddItemToCartHandleClick}
            style={{ backgroundColor: "#dac895" }}
          />
        </div>
      </div>
    </div>
  );
};

DesktopLayout.propTypes = {
  product: PropTypes.object,
};

export default DesktopLayout;
