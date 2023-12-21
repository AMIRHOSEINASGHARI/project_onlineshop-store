import React from "react";
import CategorySection from "./CategorySection";
import Incredibble from "./Incredibble";

const HomePage = () => {
  return (
    <div className="pagePT mobilePx mobilePb mw2 space-y-16">
      <CategorySection />
      <Incredibble />
    </div>
  );
};

export default HomePage;
