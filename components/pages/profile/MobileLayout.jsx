import React from "react";
import { profileLinks } from "@/constants";
import Link from "next/link";
import { IoIosArrowForward } from "react-icons/io";
import LogoutButton from "./LogoutButton";

const MobileLayout = ({ children }) => {
  return (
    <div className="lg:hidden">
      <main className="min-h-[50vh]">{children}</main>
      <aside>
        {profileLinks.map((el, i) => (
          <Link
            href={el.link}
            key={el.name}
            className="flex items-center justify-between py-3 border-b border-gray-100"
          >
            <div className="flex items-center gap-5">
              <div className="text-[20px]">{el.icon}</div>
              <p className="font-medium text-[12px]">{el.name}</p>
            </div>
            <IoIosArrowForward className="text-gray-500" />
          </Link>
        ))}
        <LogoutButton />
      </aside>
    </div>
  );
};

export default MobileLayout;
