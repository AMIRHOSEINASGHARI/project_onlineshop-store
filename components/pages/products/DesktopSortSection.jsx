"use client";

import { sortProducts } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const DesktopSortSection = () => {
  const pathname = usePathname();

  return (
    <div className="space-x-6">
      {sortProducts.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`${
            pathname === item.link && "text-blue-500"
          } font-semibold text-sm`}
        >
          {item.name}
        </Link>
      ))}
    </div>
  );
};

export default DesktopSortSection;
