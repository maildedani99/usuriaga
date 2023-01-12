import { useState } from "react";
import { CONECTION_API } from "../routes/routes";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [SubCategoryName, setSubCategoryName] = useState({})

  const getProductsBySubcategory = (id) => {
    const url = CONECTION_API + "products/getBySubCategory/" + id;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setProducts(payload);
      })
      .catch((error) => console.log(error));
  };
    
  const getSubcategoryName = (id) => {
    const url = CONECTION_API + "subcategories/getById/" + id;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        return Promise.reject(response.status);
      })
      .then((payload) => {
        setSubCategoryName(payload[0]);
      })
      .catch((error) => console.log(error));
  };

  return {
    products,
      getProductsBySubcategory,
      SubCategoryName,
      getSubcategoryName
  };
};


export default useProducts;
