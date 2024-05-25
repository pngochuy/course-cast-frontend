import React from "react";
import SideNavAdmin from "./_components/SideNav-Admin";
import HeaderAdmin from "./_components/Header-Admin";

function layout({ children }) {
  return (
    <>
      <div className="sm:w-64 sm:block fixed">
        <SideNavAdmin />
      </div>
      <div className="ml-64">
        <HeaderAdmin />
        {children}
      </div>
    </>
  );
}

export default layout;
