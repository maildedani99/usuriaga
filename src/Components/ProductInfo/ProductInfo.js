import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../ProductCard/ProductCard";
import pic from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG";
import { item, item2 } from "../../DevAssets/data/data";
import { FiPlus, FiMinus } from "react-icons/fi";
import QuantitySelector from "../QuantitySelector/QuantitySelector";
import "@coreui/coreui/dist/css/coreui.min.css";
import { CCarousel, CCarouselItem, CImage, CListGroup } from "@coreui/react";
import pic1 from "../../DevAssets/Img/04762B1F-9D8A-42F6-96FB-B1ED35F21655.JPG";
import pic2 from "../../DevAssets/Img/262E5F1A-F105-4BB7-81B1-83EA49ECE53C.JPG";
import pic3 from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG";
import { useLocation } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useResponsive from "../../Hooks/useResponsive";
import MobileLayout from "./MobileLayout/MobileLayout";

const ProductInfo = (props) => {
  const { isDesktop, isMobile } = useResponsive();
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  let { product } = location.state;

console.log(product)

  return (
    <>
      {isDesktop && (
        <div className="flex  w-5/6  mt-16 mx-auto justify-evenly 	 	text-[#515151]">
          <div className=" flex 	w-3/12  top-10 ">
            <Carousel useKeyboardArrows={false}>
              {product.images.map((image, index) => (
                <img src={image.url} alt="foto" />
              ))}
            </Carousel>
          </div>
          <div className="text-2xl flex flex-col 	w-2/6 ">
            <div className="flex flex-col p-8 text-justify mx-auto 	w-6/6">
              <span className="text-3xl  mt-4">{product.name}</span>
              <span className="text-lg mt-4">{product.price}€</span>
              <span className=" text-secondary  text-sm tracking-wider	font-body		mt-4">
                {product.description}
              </span>
            </div>
            <div className="flex flex-col mx-auto w-5/6   text-lg justify-between">
              <div className="flex text-secondary  ">
                {/* Tallas disponibles */}
                {/* <div className="flex  space-arround flex-wrap mt-1	 ">
                  {item.tallas.map((t) => (
                    <div className="border p-2 mx-1 text-base">
                      <span>{t}</span>
                    </div>
                  ))}
                </div> */}
              </div>
              <div className="flex ">
                {/*  <span className="text-secondary  ">Cantidad</span> */}
               {/*  <div className="mt-1">
                  <QuantitySelector
                    quantity={quantity}
                    setQuantity={setQuantity}
                  />
                </div> */}
              </div>
            </div>
            <div className="flex w-5/6 p-8 mx-auto">
              <input
                className=" flex flex-1 p-4 text-xl text-white  cursor-pointer text-center mb-8 capitalize "
                defaultValue="Comprar"
                disabled
                style={{ backgroundColor: "#dac895" }}
              />
            </div>
          </div>
        </div>
      )}
      {isMobile && <MobileLayout product={product} />}
    </>
  );
};

ProductInfo.propTypes = {};

export default ProductInfo;
