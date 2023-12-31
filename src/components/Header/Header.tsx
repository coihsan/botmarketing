"use client";
import React, { useEffect, useState } from "react";
import Logo from "@/src/components/Header/Logo";
import Navbar from "@/src/components/Header/Nav";
import NavMobile from "@/src/components/Header/NavMobile";
import DarkMode from "@/src/UI/DarkMode";
import { IconsUI } from "@/src/constants/Icons";

interface HamburgerProps {
  onToggle: () => void;
}

export function Hamburger({ onToggle }: HamburgerProps) {
  const [isClick, setIsClick] = useState(false);

  const handleClick = () => {
    setIsClick(!isClick);
    onToggle();
  };

  return (
    <div className="lg:hidden max-[600px]:flex">
      <button
        className="cursor-pointer flex items-center gap-2"
        onClick={handleClick}
      >
        <span className="dark:fill-white ">
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
      <div className="relative px-5 py-5 flex items-center justify-between max-w-screen-xl mx-auto">
        <div className="flex items-center gap-5">
          <Logo />
        </div>
        <div className="flex items-center gap-5">
          <Navbar />
          {isMobile && isOpen && <NavMobile />}
          <Hamburger onToggle={handleToggle} />
          <DarkMode />
        </div>
      </div>
    </header>
  );
}
