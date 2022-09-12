import React, { useState } from "react";
import PropTypes from "prop-types";
import Navbar from "../../Components/Navbar";
import ProductCard from "../../Components/ProductCard";
import { data } from "../../DevAssets/data/data";
import pic1 from "../../DevAssets/Img/04762B1F-9D8A-42F6-96FB-B1ED35F21655.JPG"
import pic2 from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG"
import pic3 from "../../DevAssets/Img/262E5F1A-F105-4BB7-81B1-83EA49ECE53C.JPG"
import pic4 from "../../DevAssets/Img/2DCD986C-FA85-4F3B-A47B-8720D2701B0C.JPG"
import pic5 from "../../DevAssets/Img/E316D8B5-6AC7-4C0F-9AD4-9BA47DD047D6.JPG"
import pic6 from "../../DevAssets/Img/5590760E-4BA2-408A-85D5-789C4E3FE3BA.JPG"



const Landing = (props) => {

console.log(pic1, pic2, pic3, pic4, pic5, pic6)

  return (
    <div className="flex flex-col flex-1 w-100	">
      <Navbar />
      <div className="flex flex-wrap	  p-10 mt-32">
        {data.map((item) => (
          <ProductCard data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
