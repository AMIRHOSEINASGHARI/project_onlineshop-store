"use client";

import { shorterText } from "@/utils/functions";
import React, { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const DescriptionSection = ({ description }) => {
  const [more, setMore] = useState(false);
  return (
    <div className="w-full rounded-2xl py-3 px-4 lg:px-8 lg:py-6 bg-gray-100">
      <h1 className="heading2 mb-3">Introduction</h1>
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
    </div>
  );
};

export default DescriptionSection;
