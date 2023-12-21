import connectDB from "@/utils/connectDB";
import { StoreDashboardProduct } from "@/utils/models/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  try {
    const products = await mongoose.models("StoreDashboardProduct");
    const incredibbleOffers = products.filter(
      (product) => product.discount > 0
    );

    return NextResponse.json(
      { msg: "Fetch Succeed", success: true, incredibble: incredibbleOffers },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
