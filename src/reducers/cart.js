import { ADD_PRODUCT_TO_CART } from "../actions/types";

const cartReducer = (productsInCart = [], action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return [...productsInCart, action.payload];

    default:
      return productsInCart;
  }
};

export default cartReducer;
