import React from "react";
import PropTypes from "prop-types";

const ProductCard = ({ data }) => {
   

    return (
      
    <div className="flex flex-col w-2/6 p-2 justify-center cursor-pointer mt-8">
      <div>
              <img src={data.pic} alt="foto" />
              
      </div>
      <span className=" text-2xl mx-auto mt-2">{data.info}</span>
          <span className=" text-2xl mx-auto mt-2 ">{data.precio} €</span>
        <input type="button" value="Añadir " style={{backgroundColor:"#dac895", color:"white"}} className="w-3/6 p-3 mt-2 self-center	cursor-pointer" />
      </div>
  );
};

ProductCard.propTypes = {};

export default ProductCard;
