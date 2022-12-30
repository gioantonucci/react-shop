import React from "react";
import ProductList from "@containers/ProductList";
import "@styles/Home.scss";

const Home = () => {
  return (
    <section className="main-container">
      <ProductList />
    </section>
  );
};

export default Home;
