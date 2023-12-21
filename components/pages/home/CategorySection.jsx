import { productsCategory } from "@/constants";
import Link from "next/link";
import React from "react";

const CategorySection = () => {
  return (
    <section>
      <h1 className="heading1">Explore by category</h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
        {productsCategory.map((item) => (
          <Link
            href={item.link}
            key={item.link}
            className="group flex flex-col items-center gap-2 py-3 lg:py-5 cardShadow bg-white hover:shadow-inner rounded-3xl"
            style={{ color: item.textColor }}
          >
            <div className="text-[50px] group-hover:transform group-hover:rotate-12 transition duration-150">
              {item.icon}
            </div>
            <p className="capitalize font-light text-[13px]">
              {item.categoryName}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategorySection;
