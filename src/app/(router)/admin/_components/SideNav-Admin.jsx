import { BadgeIcon, BookOpen, GraduationCap } from "lucide-react";
import Image from "next/image";
import React from "react";
import Link from "next/link"; // Import Link from next.js

import logo from "../../../../../public/logo-remove-bg.jpg";

function SideNavAdmin() {
  const menu = [
    {
      id: 1,
      name: "Dash Board",
      icon: BookOpen,
      path: "/admin/dashboard", // Define the path for each menu item
    },
    {
      id: 2,
      name: "Manage User",
      icon: BadgeIcon,
      path: "/admin/manage-user", // Define the path for each menu item
    },
    {
      id: 3,
      name: "Manage Course",
      icon: GraduationCap,
      path: "/admin/manage-course", // Define the path for each menu item
    },
  ];

  return (
    <>
      <div className="p-5 bg-white shadow-sm border h-screen">
        <Link href="/">
          {/* Wrap the logo with a Link */}
          <Image src={logo} alt="logo" width={170} height={80} />
        </Link>
        <hr className="mt-7" />
        <div className="mt-8">
          {menu.map((item, index) => (
            <Link href={item.path} key={index}>
              {/* Wrap each menu item with a Link */}
              <div className="group flex gap-3 mt-1 p-3 text-[18px] items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all ease-in-out duration-200">
                <item.icon className="group-hover:animate-bounce" />
                <h2>{item.name}</h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default SideNavAdmin;
