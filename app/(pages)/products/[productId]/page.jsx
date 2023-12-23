const {
  default: ProductDetailsPage,
} = require("@/components/pages/productDetails/ProductDetailsPage");

const ProductDetails = async ({ params }) => {
  async function getData() {
    const res = await fetch(
      `${process.env.API_URL}/api/store/products/${params.productId}`,
      {
        next: { revalidate: 60 * 60 },
      }
    );
    const data = await res.json();
    return data;
  }
  const data = await getData();

  if (!data.success)
    return <h1 className="pagePT mobilePx mobilePb mw">{data.msg}</h1>;

  return <ProductDetailsPage {...data.product} />;
};

export default ProductDetails;
