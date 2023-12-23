import React from "react";
import { FaSortAmountDown } from "react-icons/fa";
import DesktopSortSection from "./DesktopSortSection";

const DesktopView = ({ products }) => {
  return (
    <div className="max-lg:hidden flex items-center justify-between mb-5">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <FaSortAmountDown className="text-[25px]" />
          <span className="text-sm font-bold break-all">Sort By:</span>
        </div>
        <DesktopSortSection />
      </div>
      <p className="text-gray-400 text-xs">{products.length} products</p>
    </div>
  );
};

export default DesktopView;
