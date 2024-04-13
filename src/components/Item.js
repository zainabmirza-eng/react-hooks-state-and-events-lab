import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const[InCart, setInCart] = useState(false)
  const appClass = InCart ? "in-cart" : ""

  function addToCart() {
    setInCart(!InCart)
  }
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>{InCart ? "Add to cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
