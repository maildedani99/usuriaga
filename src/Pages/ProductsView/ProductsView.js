import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { data } from '../../DevAssets/data/data'
import ProductCard from '../../Components/ProductCard'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ProductsView = () => {

  
  const [products, setProducts] = useState([])

  const { id } = useParams()
   console.log(id)
  //const [subCategoryId, setSubCategoryId] = useState()

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

  useEffect(() => {
    console.log(products)
  }, [products]);
//console.log(products)
  return (
    <div className="flex flex-wrap	  p-10 mt-32">
       {products && products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </div>
  )
}

ProductsView.propTypes = {}

export default ProductsView