import { useState } from "react";
import { CONECTION_API } from "../routes/routes";

const useProducts = () => {

  const getProductsBySubcategory = async (id) => {
    const url = CONECTION_API + "products/getBySubCategory/" + id;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        console.log(payload);
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getProductById = async (id) => {
    const url = CONECTION_API + "products/" + id;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        console.log(payload);
        return payload.shift();
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubcategory = async (id) => {
    const url = CONECTION_API + "subcategories/getById/" + id;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        console.log(payload);
        return payload.shift();
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const getOutletProducts = async () => {
    const url = CONECTION_API + "products/outlet/all";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options);
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        console.log(payload);
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
   
  };

  const getNovelties = async () => {
    const url = CONECTION_API + "products/novelties/all";
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options);
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        console.log(payload);
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
   
  };

  const getDiscounts = async (id) => {
    const url = CONECTION_API + "products/discounts/all" ;
    const options = {
      method: "GET",
      headers: new Headers(),
    };

    fetch(url, options)
    try {
      const response = await fetch(url, options);
      if (response.status === 200) {
        const payload = await response.json();
        console.log(payload);
        return payload;
      }
      return Promise.reject(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    
    getProductsBySubcategory,
    getSubcategory,
    getProductById,
    getOutletProducts,
    getNovelties,
    getDiscounts
  };
};

export default useProducts;
