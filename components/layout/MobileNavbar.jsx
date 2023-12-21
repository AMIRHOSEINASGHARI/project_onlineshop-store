"use client";

import { navLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileNavbar = () => {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden border-t-2 fixed w-full bottom-0 z-10 bg-white py-2 px-6 overflow-auto">
      <div className="flex items-center justify-between gap-3">
        {navLinks.map((item) => (
          <Link
            href={item.link}
            key={item.name}
            className={`${
              pathname === item.link ? "text-black" : "text-gray-500"
            } flex flex-col items-center`}
          >
            <div className="text-[25px]">
              {pathname === item.link ? item.isActive : item.icon}
            </div>
            <p className="text-[10px]">{item.name}</p>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MobileNavbar;
