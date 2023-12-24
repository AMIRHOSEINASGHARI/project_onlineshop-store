import { authOptions } from "@/utils/auth";
import connectDB from "@/utils/connectDB";
import { StoreShopComment } from "@/utils/models/comment";
import { StoreDashboardProduct } from "@/utils/models/product";
import { StoreShopUser } from "@/utils/models/user";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectDB();
  } catch (error) {
    console.log("Cannot connect to DB!", error);
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }

  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { msg: "Unauthorized!", success: false },
      { status: 400 }
    );
  }

  try {
    const form = await req.json();
    const product = await StoreDashboardProduct.findOne({
      _id: form.productId,
    });
    const currentUser = await StoreShopUser.findOne({
      username: session.user.username,
    });

    const newComment = await StoreShopComment.create({
      title: form.title,
      description: form.description,
      productId: product._id,
      senderId: currentUser._id,
    });

    product.comments.push(newComment._id);
    product.save();

    return NextResponse.json(
      { msg: "Comment Added🖐", success: true },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { msg: "Server Error!", success: false },
      { status: 500 }
    );
  }
}
