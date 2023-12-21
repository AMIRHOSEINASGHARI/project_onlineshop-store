import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi";
import { TbLogin2 } from "react-icons/tb";

const DesktopNavbar = () => {
  return (
    <div className="max-lg:hidden flex items-center gap-3">
      <Link
        href="/login"
        className="flex items-center gap-2 border py-1.5 px-3 rounded-lg hover:bg-gray-100"
      >
        <TbLogin2 className="text-[25px]" />
        <p className="text-[13px] font-semibold">Signin | Signup</p>
      </Link>
      <button type="button">
        <BiCart className="text-[35px] p-1 hover:bg-gray-100 rounded-lg" />
      </button>
    </div>
  );
};

export default DesktopNavbar;
