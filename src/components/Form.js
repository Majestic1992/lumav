import React, { useRef, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ADD_PRODUCT } from "../actions/types";
import "../styles/Form.scss";

const Form = () => {
  const [productImage, setProductImage] = useState("");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const dispatch = useDispatch();
  const productsInCart = useSelector((state) => state.cart);
  const inputFocus = useRef(null);

  // Focus on input when app starts
  useEffect(() => {
    inputFocus.current.focus();
  }, []);

  const imageInputHandler = (event) => {
    setProductImage(event.target.files[0]);
  };

  const nameInputHandler = (event) => {
    setProductName(event.target.value);
  };

  const priceInputHandler = (event) => {
    setProductPrice(event.target.value);
  };

  // Add new product
  const onSubmitHandler = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_PRODUCT,
      payload: {
        id: Date.now(),
        image: productImage,
        name: productName,
        price: productPrice,
      },
    });
    setProductName("");
    setProductPrice("");
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="cart">
        <span className="cart__text">
          Products in cart: {productsInCart.length}
        </span>
      </div>
      <div className="form">
        <input
          type="file"
          name="image"
          onChange={imageInputHandler}
          className="form__input"
          accept=".jpg, .jpeg, .png"
          required
        />
        <input
          type="text"
          name="name"
          value={productName}
          onChange={nameInputHandler}
          ref={inputFocus}
          placeholder="Product name"
          className="form__input"
          required
        />
        <input
          type="number"
          name="price"
          value={productPrice}
          onChange={priceInputHandler}
          placeholder="Price"
          className="form__input"
          required
        />
        <button type="submit" className="form__btn">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Form;
