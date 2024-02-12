import connectDB from "@/utils/connectDB";
import { NextResponse } from "next/server";

const getCategories = async () => {
  const res = await fetch(`${process.env.API_URL}/api/product/category`);
  const data = await res.json();
  return data;
};

export async function GET(req) {
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
    return NextResponse.json(await getCategories());
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
