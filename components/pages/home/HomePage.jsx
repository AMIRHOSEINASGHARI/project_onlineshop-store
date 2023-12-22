import React from "react";
import CategorySection from "./CategorySection";
import SpecialOffers from "./SpecialOffers";
import LatestProducts from "./LatestProducts";

const HomePage = () => {
  return (
    <div className="pagePT mobilePx mobilePb mw2 space-y-16">
      <CategorySection />
      <SpecialOffers />
      <LatestProducts />
    </div>
  );
};

export default HomePage;
