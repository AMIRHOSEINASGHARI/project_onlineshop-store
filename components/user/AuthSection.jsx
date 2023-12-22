"use client";
import { LuUser, LuChevronDown, LuChevronRight } from "react-icons/lu";
import { TbLogout2 } from "react-icons/tb";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { profileLinks } from "@/constants";
import { signOut } from "next-auth/react";

const AuthSection = ({ session }) => {
  return (
    <div>
      <Menu as="div" className="relative">
        <Menu.Button className="flex items-center gap-1 hover:bg-gray-100 p-2 rounded-xl">
          <LuChevronDown />
          <LuUser className="text-[25px]" />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 py-2 px-3 min-w-[350px] bg-white cardShadow rounded-xl">
            <Menu.Item className="w-full">
              <Link
                href="/profile"
                className="flex items-center justify-between capitalize py-4 px-4 rounded-xl hover:bg-gray-100 "
              >
                <span className="break-all">{session?.data?.user?.name}</span>
                <div>
                  <LuChevronRight />
                </div>
              </Link>
            </Menu.Item>
            <hr className="my-2" />
            <div>
              {profileLinks.map((item) => (
                <Menu.Item className="w-full" key={item.name}>
                  <Link
                    href={item.link}
                    className="flex items-center gap-4 capitalize py-3 px-4 rounded-xl hover:bg-gray-100 "
                  >
                    <div className="text-[20px]">{item.icon}</div>
                    <span className="w-full text-sm">{item.name}</span>
                  </Link>
                </Menu.Item>
              ))}
              <Menu.Item className="w-full">
                <button
                  type="button"
                  onClick={() => signOut()}
                  className="flex items-center gap-4 capitalize py-3 px-4 rounded-xl hover:bg-gray-100  text-red-600"
                >
                  <div className="text-[20px]">
                    <TbLogout2 />
                  </div>
                  <span>Logout</span>
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default AuthSection;
