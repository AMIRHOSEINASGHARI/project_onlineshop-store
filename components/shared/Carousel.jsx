"use client";

import { createSlug, reducePrice } from "@/utils/functions";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Carousel = ({ data, moreLink, type, speed, arrows }) => {
  console.log(data);

  return (
    <Splide
      options={{
        type,
        autoplay: true,
        arrows,
        gap: 10,
        padding: 50,
        autoWidth: true,
        speed,
      }}
    >
      {moreLink && (
        <SplideSlide className="flex items-center flex-col h-full justify-center ">
          <Link href={moreLink}>
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
      )}
      {data.map((item, index) => (
        <SplideSlide key={item._id} className="bg-gray-100 rounded-xl p-5">
          <Link href={`/products/${createSlug(item.title)}`}>
            <Image
              src={item?.image}
              width={150}
              height={150}
              priority
              alt={`product#${index + 1}`}
              className="mb-3"
            />
            {item.discount ? (
              <div>
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-blue-500">
                    $ {reducePrice(item.discount, item.price).toLocaleString()}
                  </p>
                  <p className="bg-red-100 text-red-600 font-bold rounded-lg py-0.5 px-2 text-xs">
                    {item.discount}%
                  </p>
                </div>
                <p className="line-through text-gray-400 text-sm">
                  {item.price.toLocaleString()}
                </p>
              </div>
            ) : (
              <p className="font-semibold text-blue-500">
                $ {item.price.toLocaleString()}
              </p>
            )}
          </Link>
        </SplideSlide>
      ))}
    </Splide>
  );
};

export default Carousel;
