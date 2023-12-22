import React from "react";
import CategorySection from "./CategorySection";
import SpecialOffers from "./SpecialOffers";

const HomePage = () => {
  return (
    <div className="pagePT mobilePx mobilePb mw2 space-y-16">
      <CategorySection />
      <SpecialOffers />
    </div>
  );
};

export default HomePage;
