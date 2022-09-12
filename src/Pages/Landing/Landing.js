import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../Components/Navbar'
import ProductCard from '../../Components/ProductCard'
import pic1 from "../../DevAssets/Img/04762B1F-9D8A-42F6-96FB-B1ED35F21655.JPG";
import pic2 from "../../DevAssets/Img/1C29092F-1EF9-46C6-96B7-D0D816E0B25B.JPG";
import pic3 from "../../DevAssets/Img/262E5F1A-F105-4BB7-81B1-83EA49ECE53C.JPG";
import pic4 from "../../DevAssets/Img/E316D8B5-6AC7-4C0F-9AD4-9BA47DD047D6.JPG"
const Landing = props => {
  return (
    <div className="flex flex-col flex-1 	"> 
        <Navbar />
      <div className='flex  p-10' >
        < ProductCard info="Vestido Cruzado Estampado" precio="23" pic={pic1} />
        < ProductCard info="Vestido Halter Crochet" precio="34" pic={pic2}/>
        < ProductCard info="Vestido Cruzado Estampado" precio="29" pic={pic3}/>
        < ProductCard info="Mono Multiway Estampado" precio="42" pic={pic4}/>

      </div>   
    </div>
  )
}

Landing.propTypes = {}

export default Landing