import React from "react";
import PropTypes from "prop-types";
import "@coreui/coreui/dist/css/coreui.min.css";
import { useLocation } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import useResponsive from "../../Hooks/useResponsive";
import MobileLayout from "./MobileLayout/MobileLayout";
import DesktopLayout from "./DesktopLayout/DesktopLayout";

const ProductInfo = (props) => {
  const { isDesktop, isMobile } = useResponsive();
  const location = useLocation();
  let { product } = location.state;

  return (
    <>
      {isDesktop && <DesktopLayout product={product} />}
      {isMobile && <MobileLayout product={product} />}
    </>
  );
};

ProductInfo.propTypes = {
  isDesktop: PropTypes.bool,
  isMobile: PropTypes.bool,
  product: PropTypes.object
};

export default ProductInfo;
