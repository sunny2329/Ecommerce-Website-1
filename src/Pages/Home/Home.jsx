import React from "react";
import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import BestSellers from "../../components/Home/BestSellers/BestSellers";
import NewArrivals from "../../components/Home/NewArrivals/NewArrivals";
import Sale from "../../components/Home/Sale/Sale";

import YearProduct from "../../components/Home/YearProduct/YearProduct";

const Home = () => {
  return (
    <div className="w-full mx-auto">
      <Banner />
      <BannerBottom />
      <div className="max-w-container mx-auto px-4">
        <Sale />
        <NewArrivals />
        <BestSellers />
        <YearProduct />
        
      </div>
    </div>
  );
};

export default Home;