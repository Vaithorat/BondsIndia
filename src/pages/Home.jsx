import React from "react";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Home = () => {
  const data = products;

  return (
    <div className="flex flex-wrap">
      <ProductList data={data} />
    </div>
  );
};

export default Home;
