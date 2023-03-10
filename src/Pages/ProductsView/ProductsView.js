import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../Components/ProductCard";
import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useParams } from "react-router-dom";
import useProducts from "../../Hooks/useProducts";
import ProductsList from "../../Components/ProductsList/ProductsList";

const ProductsView = (props) => {
  const { id } = useParams();
  const {
    getProductsBySubcategory,
    getSubcategory,
    getNovelties,
    getDiscounts,
    getOutletProducts,
  } = useProducts();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [title, setTitle] = useState("");

  useEffect(() => {
    console.log(isNaN(id));
    const fetchData = async () => {
      try {
        if (!isNaN(id)) {
          const responseProducts = await getProductsBySubcategory(id);
          const responseSubcategory = await getSubcategory(id);
          console.log(responseProducts, responseSubcategory);
          setProducts(responseProducts);
          setTitle(responseSubcategory.name);
        } else {
          switch (id) {
            case "novelties":
              const responseNovelties = await getNovelties();
              setProducts(responseNovelties);
              setTitle("Novedades");
              break;
            case "discount":
              const responseDiscount = await getDiscounts();
              setProducts(responseDiscount);
              setTitle("Rebajas");
              break;
            case "outlet":
              const responseOutlet = await getOutletProducts();
              setProducts(responseOutlet);
              setTitle("Outlet");
              break;
            default:
              const responseProducts = await getProductsBySubcategory(id);
              const responseSubcategory = await getSubcategory(id);
              console.log(responseProducts, responseSubcategory);
              setProducts(responseProducts);
              setTitle(responseSubcategory.name);
              break;
          }
        }
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [id]);

  return <ProductsList products={products} title={title} />;
};

ProductsView.propTypes = {
  products: PropTypes.object,
  getProductsBySubcategory: PropTypes.func,
  SubCategoryName: PropTypes.object,
  getSubcategoryName: PropTypes.func,
  isDesktop: PropTypes.bool,
  id: PropTypes.string,
};

export default ProductsView;
