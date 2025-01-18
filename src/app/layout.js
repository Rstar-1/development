"use client";

import "./styles/globals.scss";
import "./styles/structure.scss";
import "./styles/font.scss";
import { Poppins, Open_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import StoreProvider from "./redux/StoreProvider";
import Sidebar from "./components/Sidebar";
import { usePathname } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "500", "400"],
  variable: "--font-poppins",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-opensans",
});

export default function HomeLayout({ children }) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable}`}>
        <div>
          <Navbar />
          <StoreProvider>
            <div
              className={
                pathname === "/barasingha" ? "" : "w-full py12 bg-f4f5f6"
              }
            >
              <div
                className={
                  pathname === "/barasingha"
                    ? ""
                    : "flex items-start gap-12 px15"
                }
              >
                {pathname === "/barasingha" ? null : <Sidebar />}
                <div
                  className={
                    pathname === "/barasingha"
                      ? ""
                      : "w-route cust-scroll overflow-auto"
                  }
                >
                  {children}
                </div>
              </div>
            </div>
          </StoreProvider>
        </div>
      </body>
    </html>
  );
}
