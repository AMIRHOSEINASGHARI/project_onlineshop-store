import React from "react";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";

const ProfilePage = (props) => {
  const { displayName, phoneNumber, orders, createdAt } = props._doc;
  return (
    <div>
      <div>
        <div className="flex justify-between">
          <h1 className="text-[18px] font-medium capitalize">{displayName}</h1>{" "}
          <Link href="/profile/edit">
            <CiEdit className="text-[25px] text-blue-400" />
          </Link>
        </div>
        <p className="text-[12px] text-gray-400 mb-2">{phoneNumber}</p>
        <p className="text-[12px]">
          Joined At: {createdAt.toLocaleDateString()}
        </p>
      </div>
      <hr className="my-3" />
      <div className="cardShadow p-3 rounded-xl">
        <div className="flex items-center justify-between mb-5">
          <h1 className="font-bold text-[20px]">My Orders</h1>
          <Link
            href="/profile/orders"
            className="flex items-center gap-1 text-blue-400 text-[12px]"
          >
            See All <IoIosArrowForward />
          </Link>
        </div>
        <span>{orders.length}</span>
      </div>
    </div>
  );
};

export default ProfilePage;
