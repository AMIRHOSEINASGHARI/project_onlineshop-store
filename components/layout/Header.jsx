import React from "react";
import SearchBox from "./SearchBox";
import Link from "next/link";
import Image from "next/image";
import DesktopNavbar from "./DesktopNavbar";

const Header = () => {
  return (
    <div className="fixed top-0 1-10 bg-white w-full border-b-2">
      <header className="flex items-center justify-between gap-5 py-2 mobilePx mw w-full">
        <Link href="/">
          <Image
            src="/logo-blue.png"
            width={35}
            height={35}
            alt="logo"
            priority
          />
        </Link>
        <div className="flex flex-1">
          <SearchBox />
        </div>
        <DesktopNavbar />
      </header>
    </div>
  );
};

export default Header;
