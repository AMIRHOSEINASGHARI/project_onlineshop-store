"use client";

import Loader from "@/components/shared/Loader";
import { dispatchHandler } from "@/utils/api";
import { LOCAL_API_URL } from "@/utils/apiConfig";
import { isInCart } from "@/utils/functions";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// button main styles
const btnClass = "bg-blue-500 text-white rounded-xl w-full py-2 font-semibold";

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
          className={btnClass}
          type="button"
          onClick={() =>
            router.push(`/login?backUrl=/products/${product?._id}`)
          }
        >
          Add to cart
        </button>
      )}
      {cart?.success && !loading && (
        <>
          <button
            className={btnClass}
            type="button"
            onClick={() => clickHandler("ADD", product?._id)}
          >
            {dispatchLoader ? <Loader w={20} h={20} /> : "Add to cart"}
          </button>
        </>
      )}
    </>
  );
};

export default AddToCartBtns;
