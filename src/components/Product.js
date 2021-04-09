import React from "react";
import { useDispatch } from "react-redux";
import { ADD_PRODUCT_TO_CART, DELETE_PRODUCT } from "../actions/types";
import "../styles/Product.scss";

const Product = ({ name, image, price, id }) => {
  const dispatch = useDispatch();

  // Add product to cart
  const addToCart = () => {
    dispatch({
      type: ADD_PRODUCT_TO_CART,
      payload: { id: id, name: name, price: price },
    });
  };

  // Delete product from the grid
  const deleteHandler = () => {
    dispatch({
      type: DELETE_PRODUCT,
      payload: { id: id },
    });
  };

  return (
    <div className="product">
      <a onClick={deleteHandler} className="product__delete--button">
        X
      </a>
      <img
        src={URL.createObjectURL(image)}
        alt="product image"
        className="product__image"
      />
      <h4 className="product__name">{name}</h4>
      <div className="product__footer">
        <span className="product__footer--price">€{price}</span>
        <div className="product__footer--button">
          <button onClick={addToCart}>Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
