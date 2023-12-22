import React from "react";
import { TbFilterCog } from "react-icons/tb";
import { FaSortAmountDown } from "react-icons/fa";

const MobileView = ({ products }) => {
  // TODO: filtering box
  return (
    <div className="mt-3">
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2">
          <TbFilterCog className="text-[25px]" />
          <span className="text-sm font-bold break-all">Filter</span>
        </div>
        <div className="flex items-center gap-2">
          <FaSortAmountDown className="text-[25px]" />
          <span className="text-sm font-bold break-all">Most Relevant</span>
        </div>
      </div>
      <hr className="my-3 lg:mb-0" />
      <div className="flex items-center justify-between text-gray-400 text-xs lg:hidden mb-10">
        <p>All</p>
        <p>{products.length} products</p>
      </div>
    </div>
  );
};

export default MobileView;
