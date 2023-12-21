import React from "react";
import SearchBox from "./SearchBox";
import Link from "next/link";
import Image from "next/image";
import DesktopNavbar from "./DesktopNavbar";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-5 py-2 mobilePx max-w-[1500px] mx-auto">
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
  );
};

export default Header;
