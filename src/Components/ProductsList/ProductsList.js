import React from 'react'
import PropTypes from 'prop-types'
import ProductCard from '../ProductCard'
import { BeatLoader } from 'react-spinners'
import useResponsive from '../../Hooks/useResponsive'

const ProductsList = ({ products, title }) => {

  const { isDesktop } = useResponsive()
  
  return (
    <div className={isDesktop ? "flex flex-wrap p-10" : "flex flex-wrap "}>
    <div className="flex text-5xl justify-center w-full tracking-wider capitalize font-light		text-[#515151] text-center">
      <span className="">{title}</span>
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
  )
}

ProductsList.propTypes = {}

export default ProductsList