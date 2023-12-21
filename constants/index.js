import {
  BiHomeAlt2,
  BiSolidCategory,
  BiSolidHomeAlt2,
  BiCategoryAlt,
  BiCart,
  BiSolidCart,
} from "react-icons/bi";
import { BsPerson, BsPersonFill } from "react-icons/bs";

export const navLinks = [
  {
    icon: <BiHomeAlt2 />,
    isActive: <BiSolidHomeAlt2 />,
    name: "Home",
    link: "/",
  },
  {
    icon: <BiCategoryAlt />,
    isActive: <BiSolidCategory />,
    name: "Category",
    link: "/category",
  },
  {
    icon: <BiCart />,
    isActive: <BiSolidCart />,
    name: "Cart",
    link: "/cart",
  },
  {
    icon: <BsPerson />,
    isActive: <BsPersonFill />,
    name: "Profile",
    link: "/profile",
  },
];
