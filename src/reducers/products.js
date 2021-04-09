import { ADD_PRODUCT, DELETE_PRODUCT } from "../actions/types";

const productsReducer = (products = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return [...products, action.payload];

    case DELETE_PRODUCT:
      return products.filter((product) => product.id !== action.payload.id);

    default:
      return products;
  }
};

export default productsReducer;
