import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../Components/ProductCard";
import useResponsive from "../../Hooks/useResponsive";
import header from "../../assets/top-ventas.jpg";

const NewsView = (props) => {
  const { isDesktop, isMobile } = useResponsive();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://127.0.0.1:8000/api/products/novelties/all";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setProducts(payload);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
        {/* <div className="flex mt-32">
          <img src={header} alt="" />
        </div> */}
      <div
        className={
          isDesktop ? "flex flex-wrap p-10  " : "flex flex-wrap p-10  "
        }
      >
        <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light		text-[#515151] text-center">
          <span className="">Novedades</span>
        </div>
        {products &&
          products.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </>
  );
};

NewsView.propTypes = {};

export default NewsView;
