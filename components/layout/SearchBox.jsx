"use client";

import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const changeHandler = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="bg-gray-100 flex items-center w-full gap-3 py-2 px-3 rounded-xl">
      <button type="submit">
        <IoSearch className="text-[20px] text-gray-600 mr-1" />
      </button>
      <input
        type="text"
        value={searchTerm}
        onChange={changeHandler}
        placeholder="Search products..."
        className="bg-transparent outline-none w-full placeholder:text-sm placeholder:text-gray-400"
      />
    </div>
  );
};

export default SearchBox;
