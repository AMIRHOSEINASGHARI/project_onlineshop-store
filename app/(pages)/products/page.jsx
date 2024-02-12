import ProductsPage from "@/components/pages/products/ProductsPage";

async function getData(searchParams) {
  const res = await fetch(`${process.env.API_URL}/api/store/products/all`, {
    next: { revalidate: 60 * 60 },
  });
  const data = await res.json();
  if (!searchParams.category) {
    return data;
  } else {
    const filteredData = data.data.filter(
      (product) => product.category.toLowerCase() === searchParams.category
    );
    return {
      ...data,
      data: filteredData,
    };
  }
}

const Products = async ({ searchParams }) => {
  const data = await getData(searchParams);

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
