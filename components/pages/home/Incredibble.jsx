import Carousel from "@/components/shared/Carousel";
import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import React from "react";

const Incredibble = async () => {
  await connectDB();
  const data = await StoreDashboardProduct.find();
  const incredibble = data.filter((product) => product.discount > 0);

  return (
    <section>
      <h1 className="heading1">Incredibble Offers</h1>
      <div className="border rounded-3xl overflow-hidden py-5 px-[3px]">
        <Carousel data={JSON.parse(JSON.stringify(incredibble))} />
      </div>
    </section>
  );
};

export default Incredibble;
