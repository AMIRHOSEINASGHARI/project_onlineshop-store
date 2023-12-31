import "./globals.css";
import "@splidejs/react-splide/css";
import Header from "@/components/layout/Header";
import MobileNavbar from "@/components/layout/MobileNavbar";
import { Toaster } from "react-hot-toast";
import SessionContextProvider from "@/context/SessionContextProvider";
import CartContextProvider from "@/context/CartContextProvider";

export const metadata = {
  title: "Online Shop Store",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <SessionContextProvider>
        <CartContextProvider>
          <body>
            <div>
              <Toaster position="top-center" />
            </div>
            <MobileNavbar />
            <Header />
            <main>{children}</main>
          </body>
        </CartContextProvider>
      </SessionContextProvider>
    </html>
  );
}
