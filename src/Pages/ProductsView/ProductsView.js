import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { data } from '../../DevAssets/data/data'
import ProductCard from '../../Components/ProductCard'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useResponsive from '../../Hooks/useResponsive'

const ProductsView = () => {

  const { isDesktop, isMobile} = useResponsive()
 
  const [products, setProducts] = useState([])

  const { id } = useParams()

  useEffect(() => {
    const url = 'http://127.0.0.1:8000/api/products/getBySubCategory/' + id;
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
  }, [id]);


  return (
    <div className={isDesktop ? 'flex flex-wrap p-10 mt-32 ' : 'flex flex-wrap p-10  '}>
      <div className='flex text-5xl justify-center w-full  text-center'>
        <span className=''>Faldas</span>
        </div>
       {products && products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
  )
}

ProductsView.propTypes = {}

export default ProductsView