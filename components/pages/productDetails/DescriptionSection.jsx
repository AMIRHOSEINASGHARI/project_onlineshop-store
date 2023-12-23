"use client";

import { shorterText } from "@/utils/functions";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DescriptionSection = ({ description }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="w-full">
      <h1 className="heading1 mb-3">Introduction</h1>
      <p className="text-justify">
        {more
          ? description
          : shorterText(description, Math.floor(description.length / 3))}
      </p>
      <button
        className="flex items-center text-link mt-5"
        onClick={() => setMore(!more)}
      >
        <p className="text-[13px]">{more ? "Show Less" : "Show More"}</p>{" "}
        <div className="text-[18px]">
          <MdKeyboardArrowRight />
        </div>
      </button>
      <div className="w-full h-[5px] rounded-full bg-gray-200 mt-3" />
    </div>
  );
};

export default DescriptionSection;
