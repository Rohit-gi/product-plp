import React, { useState, useEffect } from "react";
import data from "../db.json";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  const [singleProduct, setSingleProduct] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const findProduct = () => {
      const newProduct = data.products.find((product) => product.name === name);
      setSingleProduct(newProduct);
    };
    findProduct();
  }, [name]);

  return;
  <>
    <section className=":max-w-6xl xl:mx-auto">
      <h1>{name}</h1>
    </section>
  </>;
}
