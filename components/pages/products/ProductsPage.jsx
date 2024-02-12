import React from "react";
import ProductCard from "@/components/shared/ProductCard";
import Category from "./Category";

const ProductsPage = ({ products }) => {
  if (!products) return "loader";
  return (
    <section className="pagePT mobilePx mobilePb mw lg:pt-[80px]">
      <Category />
      {products.length === 0 && (
        <h1 className="text-center mt-20">No Products Found!</h1>
      )}
      {products.length !== 0 && (
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product?._id} {...product} />
          ))}
        </div>
      )}
    </section>
  );
};

export default ProductsPage;
