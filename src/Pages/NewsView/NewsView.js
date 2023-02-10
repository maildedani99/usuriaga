import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../Components/ProductCard";
import useResponsive from "../../Hooks/useResponsive";
import BeatLoader from "react-spinners/BeatLoader";

const NewsView = () => {
  const { isDesktop } = useResponsive();
  const [products, setProducts] = useState();

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
        setTimeout(() => setProducts(payload), 500);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className={isDesktop ? "flex flex-wrap p-10  " : "flex flex-wrap p-10 mt-10 "}
    >
      <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light		text-[#515151] text-center">
        <span className="">Novedades</span>
      </div>
      {products ? (
        products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))
      ) : (
        <div className="flex flex-1">
          <div className="mx-auto mt-48">
            <BeatLoader
              color="#dac895"
              size={50}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          </div>
        </div>
      )}
    </div>
  );
};

NewsView.propTypes = {
  isDesktop: PropTypes.bool,
  products: PropTypes.object,
  setProducts: PropTypes.func
};

export default NewsView;
