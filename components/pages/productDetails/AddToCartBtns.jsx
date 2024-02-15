"use client";

import Loader from "@/components/shared/Loader";
import { dispatchHandler } from "@/utils/api";
import { LOCAL_API_URL } from "@/utils/apiConfig";
import { isInCart, quantityCount } from "@/utils/functions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { PiTrashSimpleBold, PiMinusBold, PiPlusBold } from "react-icons/pi";

// button main styles
const ADD_BTN_CLASS =
  "bg-blue-500 text-white rounded-xl w-full py-2 font-semibold flex items-center justify-center gap-5";

const AddToCartBtns = ({ product }) => {
  const session = useSession();
  const [cart, setCart] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [dispatchLoader, setDispatchLoader] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const fetchUserCart = async () => {
      try {
        const res = await fetch(`${LOCAL_API_URL}/api/user-cart`);
        const data = await res.json();
        setLoading(false);
        setCart(data);
        if (!data?.success) setError(true);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    };

    fetchUserCart();
  }, []);

  const clickHandler = async (action, payload) => {
    if (session?.status === "unauthenticated") {
      router.push(`/login?backUrl=/products/${product?._id}`);
      return;
    }

    try {
      setDispatchLoader(true);
      const result = await dispatchHandler(action, payload);
      if (result.success) {
        setDispatchLoader(false);
        setCart(result);
      } else {
        setDispatchLoader(false);
        setError(true);
      }
    } catch (error) {
      setDispatchLoader(false);
      setError(true);
    }
  };

  console.log(cart);
  return (
    <>
      {loading && (
        <div className="flex items-center justify-center">
          <Loader w={20} h={20} />
        </div>
      )}
      {session?.status === "unauthenticated" && !loading && (
        <button
          className={ADD_BTN_CLASS}
          type="button"
          onClick={() =>
            router.push(`/login?backUrl=/products/${product?._id}`)
          }
        >
          Add to cart
        </button>
      )}
      {cart?.success && !loading && (
        <div className="flex items-center gap-5">
          {quantityCount(cart?.userCart, product?._id) === 0 && (
            <button
              className={ADD_BTN_CLASS}
              type="button"
              onClick={() => clickHandler("ADD", product?._id)}
            >
              {dispatchLoader ? <Loader w={20} h={20} /> : "Add to cart"}
            </button>
          )}
          {quantityCount(cart?.userCart, product?._id) === 1 && (
            <button
              type="button"
              className="bg-gray-100 rounded-lg p-2"
              onClick={() => clickHandler("REMOVE", product?._id)}
            >
              {dispatchLoader ? (
                <Loader w={20} h={20} />
              ) : (
                <PiTrashSimpleBold className="text-xl" />
              )}
            </button>
          )}
          {quantityCount(cart?.userCart, product?._id) > 1 && (
            <button
              type="button"
              className="bg-gray-100 rounded-lg p-2"
              onClick={() => clickHandler("DECREASE", product?._id)}
            >
              {dispatchLoader ? (
                <Loader w={20} h={20} />
              ) : (
                <PiMinusBold className="text-xl" />
              )}
            </button>
          )}
          {quantityCount(cart?.userCart, product?._id) >= 1 && (
            <span>{quantityCount(cart?.userCart, product?._id)}</span>
          )}
          {quantityCount(cart?.userCart, product?._id) >= 1 && (
            <button
              type="button"
              className="bg-gray-100 rounded-lg p-2"
              onClick={() => clickHandler("INCREASE", product?._id)}
            >
              {dispatchLoader ? (
                <Loader w={20} h={20} />
              ) : (
                <PiPlusBold className="text-xl" />
              )}
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default AddToCartBtns;
