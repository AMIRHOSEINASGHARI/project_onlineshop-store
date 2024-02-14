"use client";

import { CartContext } from "@/context/CartContextProvider";
import { isInCart, quantityCount } from "@/utils/functions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import {
  IoCaretBackOutline,
  IoCaretForwardOutline,
  IoCloseOutline,
} from "react-icons/io5";

const AddToCartBtns = ({ product }) => {
  const { state, dispatch } = useContext(CartContext);
  const session = useSession();
  const router = useRouter();
  const payload = {
    _id: product._id,
    title: product.title,
    description: product.description,
    image: product.image,
    price: product.price,
    stock: product.stock,
    discount: product.discount,
    category: product.category,
    color: product.colors[0],
    brand: product.brand,
  };

  console.log(state);

  const addHandler = () => {
    if (session?.status === "unauthenticated") {
      router.push(`/login?backUrl=/products/${product?._id}`);
    } else {
      dispatch({ type: "add", payload });
    }
  };

  return (
    <>
      <button
        // onClick={() => addHandler()}
        className="bg-primary w-full rounded-lg text-white font-semibold py-3 text-sm hover:bg-blue-600 transition-all duration-100"
      >
        Add To Cart
      </button>
      {/* {isInCart(state, product?._id) && (
        <div className="flex items-center mb-5">
          <div className="border border-blue-300 flex items-center justify-center rounded-full w-[150px] overflow-hidden mr-5">
            <button
              onClick={() =>
                dispatch({
                  type: `${
                    quantityCount(state, product?._id) <= 1
                      ? "remove"
                      : "decrease"
                  }`,
                  payload,
                })
              }
              className={`p-3 text-xl ${
                quantityCount(state, product?._id) === 1
                  ? "text-orange-400"
                  : "text-blue-500"
              }`}
            >
              <IoCaretBackOutline />
            </button>
            <span className="p-3 text-xl flex items-center justify-center w-[40px] text-blue-500">
              {quantityCount(state, product?._id)}
            </span>
            <button
              onClick={() => dispatch({ type: "increase", payload })}
              className="p-3 text-xl text-blue-500"
            >
              <IoCaretForwardOutline />
            </button>
          </div>
          <button
            onClick={() => dispatch({ type: "remove", payload })}
            className="text-red-600 hover:bg-red-200 hover:text-red-700 transition-all duration-200 text-4xl bg-red-100 rounded-full p-1"
          >
            <IoCloseOutline />
          </button>
        </div>
      )} */}
    </>
  );
};

export default AddToCartBtns;
