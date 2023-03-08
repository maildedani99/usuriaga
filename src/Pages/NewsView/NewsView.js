import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../Components/ProductCard";
import useResponsive from "../../Hooks/useResponsive";
import BeatLoader from "react-spinners/BeatLoader";
import useProducts from "../../Hooks/useProducts";

const NewsView = () => {

  const { isDesktop } = useResponsive();
  const { getNovelties } = useProducts();

  const [error, setError] = useState(false);
  const [novelties, setNovelties] = useState([]);

 useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getNovelties();
        console.log(response);
        setNovelties(response);
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

 

  return (
    <div
      className={isDesktop ? "flex flex-wrap p-10  " : "flex flex-wrap px-4  "}
    >
      <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light		text-[#515151] text-center">
        <span className="">Novedades</span>
      </div>
      {novelties ? (
        novelties.map((product) => (
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
