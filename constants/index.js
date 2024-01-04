import {
  BiHomeAlt2,
  BiSolidCategory,
  BiSolidHomeAlt2,
  BiCategoryAlt,
  BiCart,
  BiSolidCart,
} from "react-icons/bi";
import { BsPerson, BsPersonFill } from "react-icons/bs";
import { TbDeviceLaptop, TbDeviceGamepad2 } from "react-icons/tb";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { FiHeadphones, FiPrinter } from "react-icons/fi";
import { CgAppleWatch } from "react-icons/cg";
import {
  MdOutlinePhotoCamera,
  MdFavoriteBorder,
  MdOutlineModeComment,
} from "react-icons/md";
import { FaComputer, FaHourglassEnd } from "react-icons/fa6";
import { LuHardDrive } from "react-icons/lu";
import { SlScreenTablet } from "react-icons/sl";
import { LuSpeaker, LuUser2 } from "react-icons/lu";
import { LiaAddressCard } from "react-icons/lia";

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

export const productsCategory = [
  {
    categoryName: "laptop",
    icon: <TbDeviceLaptop />,
    bgColor: "#f1f5f9",
    textColor: "#64748b",
    link: "/products?category=laptop",
  },
  {
    categoryName: "mobile",
    icon: <HiOutlineDeviceMobile />,
    bgColor: "#f4f4f5",
    textColor: "#71717a",
    link: "/products?category=mobile",
  },
  {
    categoryName: "television",
    icon: <PiTelevisionSimpleBold />,
    bgColor: "#fee2e2",
    textColor: "#ef4444",
    link: "/products?category=television",
  },
  {
    categoryName: "headphone",
    icon: <FiHeadphones />,
    bgColor: "#ffedd5",
    textColor: "#f97316",
    link: "/products?category=headphone",
  },
  {
    categoryName: "printer",
    icon: <FiPrinter />,
    bgColor: "#fef9c3",
    textColor: "#eab308",
    link: "/products?category=printer",
  },
  {
    categoryName: "watch",
    icon: <CgAppleWatch />,
    bgColor: "#ecfccb",
    textColor: "#84cc16",
    link: "/products?category=watch",
  },
  {
    categoryName: "camera",
    icon: <MdOutlinePhotoCamera />,
    bgColor: "#ccfbf1",
    textColor: "#14b8a6",
    link: "/products?category=camera",
  },
  {
    categoryName: "gaming",
    icon: <TbDeviceGamepad2 />,
    bgColor: "#dcfce7",
    textColor: "#22c55e",
    link: "/products?category=gaming",
  },
  {
    categoryName: "computer",
    icon: <FaComputer />,
    bgColor: "#cffafe",
    textColor: "#06b6d4",
    link: "/products?category=computer",
  },
  {
    categoryName: "hard drive",
    icon: <LuHardDrive />,
    bgColor: "#e0e7ff",
    textColor: "#6366f1",
    link: "/products?category=hard-drive",
  },
  {
    categoryName: "tablet",
    icon: <SlScreenTablet />,
    bgColor: "#fae8ff",
    textColor: "#d946ef",
    link: "/products?category=tablet",
  },
  {
    categoryName: "speaker",
    icon: <LuSpeaker />,
    bgColor: "#ffe4e6",
    textColor: "#f43f5e",
    link: "/products?category=speaker",
  },
];

export const profileLinks = [
  {
    name: "Orders",
    icon: <FaHourglassEnd />,
    link: "/profile/orders",
  },
  {
    name: "Favorites",
    icon: <MdFavoriteBorder />,
    link: "/profile/fave",
  },
  {
    name: "Comments",
    icon: <MdOutlineModeComment />,
    link: "/profile/comments",
  },
  {
    name: "Address",
    icon: <LiaAddressCard />,
    link: "/profile/address",
  },
  {
    name: "Personal Info",
    icon: <LuUser2 />,
    link: "/profile",
  },
];
