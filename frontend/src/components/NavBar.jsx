import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center w-[92%] mx-auto py-5">
      <h2 className="text-white font-semibold text-3xl">CyronNFT</h2>
      <ConnectButton />
    </nav>
  );
};

export default NavBar;
