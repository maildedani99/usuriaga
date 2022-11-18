import React from 'react'
import PropTypes from 'prop-types'
import { NavbarWrapper } from './styles'  

const NavMenu = ({ open }) => {
  
  const categories = [
    {
      id: 1,
      name: "ropa"
    },
    {
      id: 2,
      name: "colecciones"
    },{
      id: 3,
      name: "rebajas"
    },{
      id: 4,
      name: "accesorios"
    },
  ]
  return (
    <NavbarWrapper open={open}>
     <div className="flex w-3/6 flex-col   mt-12">
            {categories.map((item) => (
              <div className="text-2xl  mt-8	 text-[#1A171B] mx-6 uppercase     ">
                  {item.name}
                {/* {item.subcategories.length > 0 && (
                  
                  <div className="dropdown-content text-[#1A171B] text-sm">
                    {item.subcategories.map((subitem) => (
                      <span className="uppercase cursor-pointer navLink hover:text-primary block">
                        {subitem.name}
                      </span>
                    ))}
                  </div>
                ) } */}
              </div>
            ))}
          </div>
    </NavbarWrapper>
  )
}

NavMenu.propTypes = {}

export default NavMenu