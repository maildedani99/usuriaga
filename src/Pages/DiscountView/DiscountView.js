import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../../Components/ProductCard';
import { BeatLoader } from 'react-spinners';
import useProducts from '../../Hooks/useProducts';
import useResponsive from '../../Hooks/useResponsive';

const DiscountView = props => {
    const { isDesktop } = useResponsive();
    //const { id } = useParams();
    const { getDiscounts } = useProducts();
  
    const [discountProducts, setDiscountsProducts] = useState([]);
    const [error, setError] = useState(false);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await getDiscounts();
          console.log(response);
          setDiscountsProducts(response);
        } catch (error) {
          setError(true);
        }
      };
      fetchData();
      // eslint-disable-next-line
    }, []);
      

  
    console.log(discountProducts);
  
    return (
      <div className={isDesktop ? "flex flex-wrap p-10" : "flex flex-wrap "}>
        <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light		text-[#515151] text-center">
          <span className="">Rebajas</span>
        </div>
        {error && (
          <div className="flex mx-auto mt-32" >
            <h1>Ups! Se ha producido un error en el servidor</h1>
          </div>
        )}
        {discountProducts ? (
          discountProducts &&
          discountProducts.map((product) => (
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
}

DiscountView.propTypes = {}

export default DiscountView