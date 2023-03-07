import React, { useState } from "react";
import PropTypes from "prop-types";
import ProductCard from "../../Components/ProductCard";
import { useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useParams } from "react-router-dom";
import useResponsive from "../../Hooks/useResponsive";
import useProducts from "../../Hooks/useProducts";

const ProductsView = (props) => {
  const { id } = useParams();
  const { isDesktop } = useResponsive();
  const {
    getProductsBySubcategory,
    getSubcategory,
  } = useProducts();
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [subCategory, setSubCategory] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseProducts = await getProductsBySubcategory(id);
        const responseSubcategory = await getSubcategory(id);
        console.log(responseProducts, responseSubcategory)
        setProducts(responseProducts)
        setSubCategory(responseSubcategory)
      } catch (error) {
        setError(true);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, [id]);



  return (
    <div className={isDesktop ? "flex flex-wrap p-10" : "flex flex-wrap "}>
      <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light		text-[#515151] text-center">
        {/* <span className="">{SubCategoryName.name}</span> */}
      </div>
      {products ? (
        products &&
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

ProductsView.propTypes = {
  products: PropTypes.object,
  getProductsBySubcategory: PropTypes.func,
  SubCategoryName: PropTypes.object,
  getSubcategoryName: PropTypes.func,
  isDesktop: PropTypes.bool,
  id: PropTypes.string,
};

export default ProductsView;
