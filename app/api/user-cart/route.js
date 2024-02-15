import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import {
  calcTotalDiscountPrice,
  calcTotalPrice,
  calcTotalProducts,
  reducePrice,
} from "@/utils/functions";
import { StoreDashboardProduct } from "@/utils/models/product";
import { StoreShopUser } from "@/utils/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 401 }
    );

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
    const userCart = await StoreShopUser.findOne({
      username: session.user.username,
    }).select(["cart"]);

    return NextResponse.json(
      { msg: "ok", success: true, userCart: userCart.cart },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}

export async function PATCH(req) {
  const session = await getServerSession(authOptions);

  if (!session)
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 401 }
    );

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
    const { searchParams } = new URL(req.url);
    const action_type = searchParams.get("action_type");
    const product_id = searchParams.get("product_id");
    const product = await StoreDashboardProduct.findById(product_id).select([
      "-keywords",
      "-orders",
      "-likes",
      "-comments",
    ]);
    const user = await StoreShopUser.findOne({
      username: session.user.username,
    });

    let selectedItems = user.cart.selectedItems;

    switch (action_type) {
      case "ADD":
        selectedItems = [...selectedItems, { ...product, quantity: 1 }];
        user.cart.selectedItems = selectedItems;
        user.cart.totalProducts = calcTotalProducts(selectedItems);
        user.cart.totalPrice = calcTotalPrice(selectedItems);
        user.cart.totalDiscountPrice = calcTotalDiscountPrice(selectedItems);
        user.save();
        return NextResponse.json(
          { msg: "ok", success: true, userCart: user.cart },
          { status: 201 }
        );

      case "REMOVE":
        const product_index = selectedItems.findIndex(
          (item) => item._doc._id === product_id
        );
        selectedItems.splice(product_index, 1);
        user.cart.selectedItems = selectedItems;
        user.cart.totalProducts = calcTotalProducts(selectedItems);
        user.cart.totalPrice = calcTotalPrice(selectedItems);
        user.cart.totalDiscountPrice = calcTotalDiscountPrice(selectedItems);
        user.save();
        return NextResponse.json(
          { msg: "ok", success: true, userCart: user.cart },
          { status: 201 }
        );

      case "INCREASE":
      // increase

      case "DECREASE":
      // decrease

      case "CHECKOUT":
      // checkout
    }
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
