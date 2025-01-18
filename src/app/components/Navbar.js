"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import Button from "../components/ui/Button";

const Navbar = () => {
  const pathname = usePathname();
  const NavData = [
    { href: "/home", label: "News" },
    { href: "/about", label: "Web" },
    { href: "/barasingha", label: "Barasingha" },
    { href: "/mine", label: "Mine" },
    { href: "/connect", label: "Admin" },
  ];

  return (
    <div className="py10 w-full relative z-50">
      <div
        className={pathname === "/barasingha" ? "container mx-auto" : "px15"}
      >
        <div className="flex items-center justify-between">
          <h1
            className={`${
              pathname === "/barasingha" ? "textwhite" : "textdark"
            } mlpx2 fsize21 my1 font-600`}
          >
            Bara
            <span
              className={
                pathname === "/barasingha"
                  ? "textprimaryAI mlpx2"
                  : "textprimary mlpx2"
              }
            >
              Singha
            </span>
          </h1>
          <div className="flex items-center gap-12 prpx14 md-prpx1 sm-prpx1">
            {NavData.map((e, index) => {
              if (pathname === "/barasingha") {
                return (
                  <Link
                    key={index}
                    href={e.href}
                    className={`${
                      pathname === e.href
                        ? "textprimaryAI text-400 mx15 fsize14"
                        : "textwhite text-400 mx15 fsize14"
                    }`}
                  >
                    {e.label}
                  </Link>
                );
              }
              return (
                <Link
                  key={index}
                  href={e.href}
                  className={`${
                    pathname === e.href
                      ? "textprimary mx15 fsize14"
                      : "textgray text-400 mx15 fsize14"
                  }`}
                >
                  {e.label}
                </Link>
              );
            })}
          </div>
          {pathname === "/barasingha" ? (
            <>
              <Button
                text="Get Started"
                color="dprimary"
                round="sm"
                size="md"
              />
            </>
          ) : (
            <>
              <Button text="Get Started" color="primary" round="sm" size="md" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
