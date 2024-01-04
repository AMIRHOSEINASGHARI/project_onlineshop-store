"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";

const AddToCartBtns = ({ productId }) => {
  const session = useSession();
  const router = useRouter();

  const addHandler = () => {
    if (session?.status === "unauthenticated") {
      router.push(`/login?backUrl=/products/${productId}`);
    }
  };

  return (
    <button
      className="bg-primary w-full rounded-lg text-white font-semibold py-3 text-sm hover:bg-blue-600 transition-all duration-100"
      onClick={() => addHandler()}
    >
      Add To Cart
    </button>
  );
};

export default AddToCartBtns;
