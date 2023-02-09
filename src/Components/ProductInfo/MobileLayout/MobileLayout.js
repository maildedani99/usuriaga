import React from 'react'
import PropTypes from 'prop-types'
import { item } from '../../../DevAssets/data/data'
import { Carousel } from 'react-responsive-carousel'

const MobileLayout = ({ product }) => {
  
console.log(product)

  return (
    <div className="flex flex-col  mt-16 mx-auto justify-center ">
    <div className=" flex flex-1 w-5/6  mx-auto p-4	">
      <Carousel useKeyboardArrows={false}>
        {product.images.map((image, index) => (
          <img src={image.url} alt="foto" />
        ))}
      </Carousel>
    </div>
    <div className="text-2xl flex flex-col  	 ">
      <div className="flex flex-col p-8 text-justify mx-auto	w-6/6">
        <span className="text-3xl mt-4">{product.name}</span>
        <span className="text-lg mt-4">{product.price }€</span>
        <span className="text-sm text-secondary 	mt-4">
          {product.description}
        </span>
      </div>
      
      <div className="flex w-5/6 p-8 mx-auto">
        <input
          className=" flex flex-1 p-4 text-xl text-white   text-center mb-8 capitalize"
          defaultValue="Comprar"
          style={{ backgroundColor: "#dac895" }}
        />
        </div>
        <span>e 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versio</span>
    </div>
    </div>
  )
}

MobileLayout.propTypes = {}

export default MobileLayout