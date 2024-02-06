import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./components/Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Outlet />
    </div>
  );
};

export default Layout;