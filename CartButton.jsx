import { CartContext } from "./CartContext";
import React, { useContext } from "react";

export default function CartButton() {
  const { cartCount } = useContext(CartContext);

  return <div>Items in Cart:{cartCount}</div>;
}
