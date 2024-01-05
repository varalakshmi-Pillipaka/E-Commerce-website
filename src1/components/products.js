import React from "react";
import list from "../data";
import Productlist from "./productlist";
import "../styles/products.css";

const Product = ({ handleClick }) => {
  return (
    <section>
      {list.map((item) => (
        <Productlist key={item.id} item={item} handleClick={handleClick} />
      ))}
    </section>
  );
};

export default Product;