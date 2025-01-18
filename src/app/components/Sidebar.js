"use client";

import { usePathname } from "next/navigation";
import FeatherIcon from "feather-icons-react";
import Link from "next/link";

const Sidebar = () => {
  const pathname = usePathname();
  const SideNav = [
    {
      icon: "grid",
      route: "/mine",
    },
    {
      icon: "activity",
      route: "/mine/activity",
    },
    {
      icon: "settings",
      route: "/mine/management",
    },
    {
      icon: "bar-chart-2",
      route: "/mine/stock",
    },
    {
      icon: "users",
      route: "/mine/stock",
    },
  ];
  return (
    <div className="w-side bgwhite rounded-5 py20 flex justify-center items-start">
      <div className="grid-cols-1 gap-12">
        {SideNav.map((e, index) => {
          return (
            <Link
              key={index}
              href={e.route}
              className={`${
                pathname === e.route
                  ? "bgprimary side-tab rounded-5 flex items-center justify-center"
                  : "bg-fa side-tab rounded-5 flex items-center justify-center"
              }`}
            >
              <FeatherIcon
                icon={e?.icon}
                className={`${
                  pathname === e.route ? "textwhite flex" : "textprimary flex"
                }`}
                size={20}
              />
            </Link>
          );
        })}
        <div className="bg-fa side-tab rounded-5 flex items-center justify-center">
          <FeatherIcon icon="bell" className="textprimary flex" size={20} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
