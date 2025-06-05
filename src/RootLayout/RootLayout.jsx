import React, { createContext } from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";
export const creatconText = createContext();

const RootLayout = () => {
  const a = 10;
  return (
    <div>
      <Navbar></Navbar>
      <creatconText.Provider value={a}>
        <Outlet></Outlet>
      </creatconText.Provider>
    </div>
  );
};

export default RootLayout;
