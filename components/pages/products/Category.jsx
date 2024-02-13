"use client";

import Loader from "@/components/shared/Loader";
import { LOCAL_API_URL } from "@/utils/apiConfig";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch(`${LOCAL_API_URL}/api/product/category`)
      .then((res) => res.json())
      .then((json) => {
        if (json.success) setCategories(["all", ...json.categories]);
        if (!json.success) setCategories(null);
      });
  }, []);

  const clickHandler = (category) => {
    if (category !== "all") router.push(`/products?category=${category}`);
    if (category === "all") router.push(`/products`);
  };

  return (
    <div className="w-full mb-5 overflow-auto">
      {categories.length === 0 && <Loader h={30} w={30} />}
      {categories === null && <h1>error</h1>}
      {categories.length !== 0 && (
        <div className="w-full flex lg:justify-center gap-8">
          {categories.map((c) => (
            <button
              type="button"
              className="capitalize text-sm font-light rounded-full bg-gray-100 py-1 px-5"
              key={c}
              onClick={() => clickHandler(c)}
            >
              {c}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
