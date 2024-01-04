"use client";

import React from "react";
import { BiLogOut } from "react-icons/bi";
import { signOut } from "next-auth/react";
import { IoIosArrowForward } from "react-icons/io";

const LogoutButton = () => {
  return (
    <button
      className="flex items-center justify-between py-3 lg:px-3 w-full hover:bg-gray-100 lg:rounded-lg"
      onClick={() => signOut()}
    >
      <div className="flex items-center gap-5">
        <div className="text-[20px] lg:text-[25px]">
          <BiLogOut />
        </div>
        <p className="font-medium text-[12px] lg:text-[14px]">Logout</p>
      </div>
      <IoIosArrowForward className="text-gray-500" />
    </button>
  );
};

export default LogoutButton;
