import Carousel from "@/components/shared/Carousel";
import { BASE_API_URL } from "@/utils/apiConfig";
import React from "react";

async function getData() {
  const res = await fetch(`${BASE_API_URL}/api/store/products/special-offer`, {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

const SpecialOffers = async () => {
  const data = await getData();

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
        <h1 className="heading1 mb-3">Special Offers</h1>
        <div className="border rounded-3xl overflow-hidden py-5 px-[3px]">
          <Carousel
            type="slide"
            speed={200}
            arrows
            moreLink="/products/special-offers"
            data={JSON.parse(JSON.stringify(data.special))}
          />
        </div>
      </section>
    );
  }
};

export default SpecialOffers;
