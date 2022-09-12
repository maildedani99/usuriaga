import React from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import { data } from "../../DevAssets/data/data";

const Landing = (props) => {
  return (
    <div className="flex flex-col flex-1 w-100	">
      <Navbar />
     {/*  <div className="text-5xl text-center mt-16" >
        <h1>New Collection</h1>
      </div> */}
      <div className="flex flex-wrap	  p-10 mt-32">
        {data.map((item) => (
          <ProductCard
          data={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
