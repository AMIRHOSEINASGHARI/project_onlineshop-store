"use client";

import { createSlug, reducePrice } from "@/utils/functions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel = ({ data }) => {
  return (
    <Splide
      options={{
        type: "loop",
        autoplay: true,
        arrows: true,
        gap: 10,
        padding: 50,
        autoWidth: true,
      }}
    >
      <SplideSlide className="flex items-center flex-col h-full justify-center ">
        <Link href="/products/incredibble-offer">
          <Image
            src="/assets/offer.png"
            className="my-10 mr-5"
            width={250}
            height={250}
            priority
          />
          <p className="bg-black text-white font-bold rounded-full py-2 px-5 text-center">
            See More
          </p>
        </Link>
      </SplideSlide>
      {data.map((item, index) => (
        <SplideSlide key={item._id} className="bg-gray-100 rounded-xl p-5">
          <Link href={`/products/${createSlug(item.title)}`}>
            <Image
              src={item?.image}
              width={150}
              height={150}
              priority
              alt={`product#${index + 1}`}
            />
            <div className="flex items-center justify-between mt-3 mb-6">
              <p className="text-[18px] break-all font-semibold">
                $ {reducePrice(item.discount, item.price).toLocaleString()}
              </p>
              <span className="bg-red-600 font-semibold text-white text-sm rounded-full py-1 px-2">
                {item.discount}%
              </span>
            </div>
            <p className="text-gray-400 line-through">
              {item.price.toLocaleString()}
            </p>
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
