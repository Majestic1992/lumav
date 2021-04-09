import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";
import "../styles/ProductList.scss";

const ProductList = () => {
  const products = useSelector((state) => state.products);

  return (
    <div className="productGrid">
      {products.map((product) => (
        <Product
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          id={product.id}
        />
      ))}
    </div>
  );
};

export default ProductList;
