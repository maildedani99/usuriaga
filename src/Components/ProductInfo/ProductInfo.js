import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useLocation, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useResponsive from "../../Hooks/useResponsive";
import MobileLayout from "./MobileLayout/MobileLayout";
import DesktopLayout from "./DesktopLayout/DesktopLayout";
import useProducts from "../../Hooks/useProducts";

const ProductInfo = (props) => {
  const { isDesktop, isMobile } = useResponsive();
  const { getProductById, product } = useProducts();
  //const location = useLocation();
  let { id } = useParams();

  useEffect(() => {
    id && getProductById(id)
  
},[])

  return (
    <>
      {isDesktop && <DesktopLayout product={product && product} />}
      {isMobile && <MobileLayout product={product && product} />}
    </>
  );
};

ProductInfo.propTypes = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
  product: PropTypes.object
};

export default ProductInfo;
