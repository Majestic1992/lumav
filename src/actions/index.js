import { ADD_PRODUCT, DELETE_PRODUCT, ADD_PRODUCT_TO_CART } from "./types";

export const addProduct = (data) => {
  return {
    type: ADD_PRODUCT,
    payload: data,
  };
};

export const deleteProduct = (data) => {
  return {
    type: DELETE_PRODUCT,
    payload: data,
  };
};

export const addProductToCart = (data) => {
  return {
    type: ADD_PRODUCT_TO_CART,
    payload: data,
  };
};
