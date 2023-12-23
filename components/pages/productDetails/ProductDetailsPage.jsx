import Image from "next/image";
import React from "react";
import ProductActions from "./ProductActions";
import Link from "next/link";
import { reducePrice } from "@/utils/functions";

const ProductDetailsPage = ({
  _id,
  title,
  description,
  image,
  price,
  stock,
  discount,
  category,
  colors,
  keywords,
  orders,
  brand,
  likes,
  comments,
  createdAt,
}) => {
  return (
    <section className="pagePT mobilePx lg:pt-[100px] mobilePb mw flex flex-col lg:flex-row gap-5">
      {/* IMAGE SECTION */}
      <div className="flex flex-col lg:flex-row items-center">
        <div className="w-full flex items-center justify-center">
          <Image
            src={image}
            width={300}
            height={300}
            alt={title}
            priority
            className="lg:w-[400px] xl:w-[500px]"
          />
        </div>
        <ProductActions />
      </div>
      <div className="flex flex-col gap-10 w-full">
        <div>
          <Link
            href={`/products?category=${category}`}
            className="text-link capitalize text-xs"
          >
            {category}
          </Link>
          <h1 className="font-semibold lg:text-[20px]">{title}</h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-5 w-full">
          <div className="w-full">
            <div className="space-x-3">
              <span className="capitalize text-xs">{orders.length} Orders</span>
              <Link
                href={`/products/${_id}#comments`}
                className="text-link capitalize text-xs"
              >
                {comments.length} Comments
              </Link>
            </div>
            <hr className="my-2" />
            <div>
              <div className="flex items-center justify-between mb-3">
                <h1 className="font-semibold text-sm">Color:</h1>
                <span className="text-xs text-gray-400">
                  {colors.length} Color(s)
                </span>
              </div>
              <div className="flex flex-wrap gap-4">
                {colors.map((color) => (
                  <button
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-[30px] h-[30px] rounded-full outline outline-2 outline-offset-2 outline-gray-500"
                  ></button>
                ))}
              </div>
            </div>
          </div>
          {/* ADD TO CART SECTION */}
          <div className="lg:w-[50%] cardShadow rounded-xl p-4">
            {discount > 0 && (
              <div className="space-y-2 mb-5">
                <div className="flex items-center gap-5">
                  <span className="bg-red-600 rounded-full py-1 px-3 text-[10px] font-semibold text-white">
                    {discount}%
                  </span>
                  <p className="line-through text-gray-300 text-sm">
                    {price.toLocaleString()}
                  </p>
                </div>
                <p className="font-bold text-[20px]">
                  $ {reducePrice(discount, price).toLocaleString()}
                </p>
              </div>
            )}
            {discount === 0 && (
              <p className="font-bold text-[20px] mb-5">
                $ {price.toLocaleString()}
              </p>
            )}
            {stock <= 10 && (
              <p className="text-red-600 text-xs font-semibold mb-2 text-right">
                Only {stock} left in stock
              </p>
            )}
            <button className="bg-primary w-full rounded-lg text-white font-semibold py-3 text-sm hover:bg-blue-600 transition-all duration-100">
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
