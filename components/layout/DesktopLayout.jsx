import { profileLinks } from "@/constants";
import Link from "next/link";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import LogoutButton from "../pages/profile/LogoutButton";

const DesktopLayout = ({ children }) => {
  return (
    <div className="max-lg:hidden flex gap-5">
      <aside className="w-[300px] border rounded-xl p-3">
        {profileLinks.map((el, i) => (
          <Link
            href={el.link}
            key={el.name}
            className="flex items-center justify-between py-3 border-b border-gray-100 hover:bg-gray-100 rounded-lg px-3"
          >
            <div className="flex items-center gap-5">
              <div className="text-[25px]">{el.icon}</div>
              <p className="font-medium text-[14px]">{el.name}</p>
            </div>
            <IoIosArrowForward className="text-gray-500" />
          </Link>
        ))}
        <div>
          <LogoutButton />
        </div>
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
};

export default DesktopLayout;
