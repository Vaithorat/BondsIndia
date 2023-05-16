import React, { useEffect, useState } from "react";
import ProductList from "../components/UI/ProductList";
import products from "../assets/data/products";

const Home = () => {
  const [data, setData] = useState(products);

  return (
    <div className="flex flex-wrap">
      <ProductList data={data} />
    </div>
  );
};

export default Home;
