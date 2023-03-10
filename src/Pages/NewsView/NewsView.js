import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../Components/ProductCard";
import useResponsive from "../../Hooks/useResponsive";
import BeatLoader from "react-spinners/BeatLoader";
import useProducts from "../../Hooks/useProducts";
import ElementsView from "../../Components/ProductsList/ProductsList";

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
    < ElementsView products={novelties} />
  );
};

NewsView.propTypes = {
  isDesktop: PropTypes.bool,
  products: PropTypes.object,
  setProducts: PropTypes.func
};

export default NewsView;
