"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
import NavMobile from "@/src/components/Header/NavMobile";
import { IconsUI } from "@/src/constants/Icons";

export function Hamburger({ onToggle }: { onToggle: () => void }) {
  const [isClick, setIsClick] = useState(false);

  return (
    <div className="lg:hidden max-[600px]:flex ">
      <button
        className="cursor-pointer flex items-center gap-2"
        onClick={() => setIsClick(!isClick)}
      >
        <span className="dark:fill-white w-[32px]">
          {isClick ? IconsUI.close : IconsUI.menu}
        </span>
      </button>
    </div>
  );
}

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 780);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <header className="fixed top-0 w-full shadow-md z-50 bg-onyx-50 dark:bg-onyx-900">
      <div className="relative px-3 py-5 flex items-center justify-between max-w-screen-xl mx-auto  ">
        <div className="flex items-center gap-5">
          <Logo />
        </div>
        <div className="flex items-center gap-5">
          <Navbar />
          {isMobile && isOpen ? <NavMobile closeMenu={closeMenu} /> : null}
          <Hamburger onToggle={handleToggle} />
        </div>
      </div>
    </header>
  );
}
