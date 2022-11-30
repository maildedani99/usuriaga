import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../../Components/ProductCard';
import useResponsive from '../../Hooks/useResponsive';

const NewsView = props => {

  const { isDesktop, isMobile} = useResponsive()
  const [products, setProducts] = useState([])


  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/products/novelties/all';
    const options = {
        method: 'GET',
        headers: new Headers(),
    };

    fetch(url, options)
        .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            }
        )
        .then(payload => {
                setProducts(payload);
            }
        )
        .catch(error => console.log(error));
  }, []);

  return (
    <div className={isDesktop ? 'flex flex-wrap p-10 mt-32 ' :  'flex flex-wrap p-10  ' }>
       {products && products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
  )
}

NewsView.propTypes = {}

export default NewsView