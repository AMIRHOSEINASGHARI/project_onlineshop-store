import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import MobileView from "./MobileView";

const ProductsPage = ({ products }) => {
  if (!products) return "loader";
  return (
    <section className="pagePT mobilePx mobilePb mw lg:pt-[100px]">
      <MobileView products={products} />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product?._id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductsPage;
