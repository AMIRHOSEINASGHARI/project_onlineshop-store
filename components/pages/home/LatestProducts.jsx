import Carousel from "@/components/shared/Carousel";
import { BASE_API_URL } from "@/utils/apiConfig";
import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

async function getData() {
  const res = await fetch(`${BASE_API_URL}/api/store/products/latest`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const LatestProducts = async () => {
  const data = await getData();

  if (!data.success) {
    return (
      <div className="flex items-center justify-center w-full">
        <p>{data.msg}</p>
      </div>
    );
  }

  return (
    <section>
      <div className="flex items-center justify-between mb-3">
        <h1 className="heading1">Newest</h1>
        <Link
          href="/products"
          className="flex items-center gap-2 bg-gray-100 rounded-xl py-1 pl-4 pr-3"
        >
          <span className="font-semibold text-[14px]">See All</span>
          <IoIosArrowRoundForward className="text-[25px]" />
        </Link>
      </div>
      <div className="border rounded-3xl overflow-hidden py-5 px-[3px]">
        <Carousel
          type="loop"
          speed={200}
          data={JSON.parse(JSON.stringify(data.data))}
        />
      </div>
    </section>
  );
};

export default LatestProducts;
