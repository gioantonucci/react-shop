import React from "react";
import ProductList from "@containers/ProductList";
import "@styles/Home.scss";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <section className="main-container">
      <ProductList />
 
    </section>
  );
};

export default Home;
