import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Layout() {
  return (
    <>
      <div className="bg-[url('/bgc.jpg')] bg-cover bg-center bg-no-repeat flex flex-col h-screen ">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
