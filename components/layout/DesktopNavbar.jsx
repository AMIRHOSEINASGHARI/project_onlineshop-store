"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { BiCart } from "react-icons/bi";
import { TbLogin2 } from "react-icons/tb";
import AuthSection from "../user/AuthSection";

const DesktopNavbar = () => {
  const session = useSession();

  return (
    <div className="max-lg:hidden flex items-center gap-2">
      {session?.status === "authenticated" && <AuthSection session={session} />}
      {session?.status !== "authenticated" && (
        <Link
          href="/login"
          className="flex items-center gap-2 border py-1.5 px-3 rounded-lg hover:bg-gray-100"
        >
          <TbLogin2 className="text-[25px]" />
          <p className="text-[13px] font-semibold">Signin | Signup</p>
        </Link>
      )}
      <button
        type="button"
        className="flex items-center gap-1 hover:bg-gray-100 p-2 rounded-xl"
      >
        <BiCart className="text-[25px]" />
      </button>
    </div>
  );
};

export default DesktopNavbar;
