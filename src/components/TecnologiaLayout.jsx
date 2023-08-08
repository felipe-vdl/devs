import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TecnologiaLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="py-8 flex flex-col items-center flex-grow bg-mesquita">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
