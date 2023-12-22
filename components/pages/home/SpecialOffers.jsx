import Carousel from "@/components/shared/Carousel";
import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import React from "react";

const SpecialOffers = async () => {
  const res = await fetch(
    `${process.env.API_URL}/api/store/products/special-offer`
  );
  const data = await res.json();
  console.log(data.special.length);

  if (!data.success) {
    return (
      <div className="flex items-center justify-center w-full">
        <p>{data.msg}</p>
      </div>
    );
  }

  if (data.success) {
    return (
      <section>
        <h1 className="heading1">Special Offers</h1>
        <div className="border rounded-3xl overflow-hidden py-5 px-[3px]">
          <Carousel data={JSON.parse(JSON.stringify(data.special))} />
        </div>
      </section>
    );
  }
};

export default SpecialOffers;
