"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
import NavMobile from "@/src/components/Header/NavMobile";

export default function Header() {
  return (
    <header className="fixed top-0 w-full shadow-md z-50 bg-onyx-50 dark:bg-onyx-900">
      <div className="relative px-3 py-5 flex items-center justify-between max-w-screen-xl mx-auto  ">
        <div className="flex items-center gap-5">
          <Logo />
          <Navbar />
        </div>
        <div className="flex items-center gap-5">
          <NavMobile />
        </div>
      </div>
    </header>
  );
}
