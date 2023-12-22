import ProductsPage from "@/components/pages/products/ProductsPage";
import React from "react";

async function getData() {
  const res = await fetch(`${process.env.API_URL}/api/store/products/all`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const Products = async () => {
  const data = await getData();

  if (!data.success) {
    return (
      <div className="flex items-center justify-center w-full">
        <p>{data.msg}</p>
      </div>
    );
  }
  return <ProductsPage products={data.data} />;
};

export default Products;
