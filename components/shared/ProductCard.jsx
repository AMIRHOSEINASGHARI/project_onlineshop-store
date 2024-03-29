import React from "react";
import { MotionDiv } from "./MotionDiv";
import { createSlug, reducePrice, shorterText } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import { FaHashtag, FaHourglassEnd } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineModeComment } from "react-icons/md";

const ProductCard = ({
  _id,
  category,
  comments,
  discount,
  image,
  likes,
  price,
  stock,
  title,
  orders,
}) => {
  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: 0.25,
        ease: "easeInOut",
        duration: 0.25,
      }}
      viewport={{
        amount: 0,
      }}
      className={`p-5 border hover:shadow-xl hover:shadow-slate-300 transition-all duration-100 flex flex-col justify-between gap-6 ${
        stock === 0 && "text-gray-300"
      }`}
    >
      <div className="relative">
        {stock === 0 && (
          <div className="absolute w-full font-black text-2xl">
            <p className="bg-black text-white w-full text-center">
              Unavailable
            </p>
          </div>
        )}
        <Link
          href={`/products/${_id}`}
          className="w-full h-[180px] overflow-hidden flex justify-center items-center bg-gray-100 p-3"
        >
          <Image
            src={image}
            width={170}
            height={170}
            alt={title}
            priority
            className="object-contain"
          />
        </Link>
        <div className="flex justify-between items-center my-1">
          {discount ? (
            <div className="flex items-baseline gap-1 break-all">
              <p className="text-sky-500 tracking-tight font-semibold text-[20px] break-all">
                $ {reducePrice(discount, price).toLocaleString()}
              </p>
              <p className="text-gray-300 tracking-tight line-through break-all text-[15px]">
                $ {price}
              </p>
            </div>
          ) : (
            <p className="text-sky-500 tracking-tight font-semibold text-[20px] break-all">
              $ {price.toLocaleString()}
            </p>
          )}
          <span className="uppercase bg-gray-100 text-gray-500 rounded-full py-1 px-3 text-xs font-semibold">
            {category}
          </span>
        </div>
        <Link
          href={`/products/${_id}`}
          className="font-bold text-justify hover:text-blue-600 transition duration-100"
        >
          {shorterText(title, 50)}
        </Link>
      </div>
      <div>
        <div className="w-full flex items-center justify-between gap-1">
          <div
            className={`flex flex-col items-center ${
              stock <= 10 && "text-red-500"
            }`}
          >
            <FaHashtag />
            <p className="break-all text-xs mt-1">{stock.toLocaleString()}</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHourglassEnd />
            <p className="break-all text-xs mt-1">
              {orders.length.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineModeComment />
            <p className="break-all text-xs mt-1">
              {comments.length.toLocaleString()}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <MdFavoriteBorder />
            <p className="break-all text-xs mt-1">
              {likes.length.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default ProductCard;
