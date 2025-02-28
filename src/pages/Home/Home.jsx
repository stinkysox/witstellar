import React from "react";
import "./Home.css";
import Navbar from "../../components/Navbar/Navbar";
import HomeBanner from "../../components/HomeBanner/HomeBanner";
import Products from "../../components/Products/Products";
import CategorySelector from "../../components/CategorySelector/CategorySelector";
const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <HomeBanner />

      <div className="home-main-heading">
        <h2> Get your custom polaroids and Frames</h2>
      </div>
      <CategorySelector />

      <Products />
    </div>
  );
};

export default Home;
