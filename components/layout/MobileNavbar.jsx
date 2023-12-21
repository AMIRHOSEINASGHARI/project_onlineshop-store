"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden border-t-2 fixed w-full bottom-0 z-10 bg-white overflow-auto">
      <div className="flex items-center justify-between gap-3">
        {navLinks.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className={`${
              pathname === item.link ? "text-black" : "text-gray-400"
            } flex flex-col items-center py-2 px-6`}
          >
            <div className="text-[25px]">
              {pathname === item.link ? item.isActive : item.icon}
            </div>
            <p className="text-[10px] font-semibold">{item.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
