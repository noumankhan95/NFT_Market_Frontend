"use client";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
function Header() {
  return (
    <header className="bg-white shadow-md px-4 py-3 flex justify-between items-center">
      <h1 className="text-xl font-semibold text-indigo-600">QuoteNFT</h1>
      <nav className="hidden md:flex space-x-8 items-center">
        <Link
          href="/"
          className="text-orange-700 hover:text-indigo-600 transition active font-medium !mx-4"
        >
          Home
        </Link>
        <Link
          href="/mint"
          className="text-orange-700 hover:text-indigo-600 transition font-medium !mx-4"
        >
          Mint
        </Link>
        <Link
          href="/list"
          className="text-orange-700 hover:text-indigo-600 transition font-medium !mx-4"
        >
          List
        </Link>
      </nav>
      <ConnectButton />
    </header>
  );
}

export default Header;
