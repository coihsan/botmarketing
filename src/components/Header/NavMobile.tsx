"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";

export function Hamburger({ onToggle }: { onToggle: () => void }) {
  const [isClick, setIsClick] = useState(false);

  function handleClick() {
    if (!isClick) {
      return "/menu.svg";
    } else {
      return "/close.svg";
    }
  }

  return (
    <div className="lg:hidden max-[600px]:flex">
      <button
        className="cursor-pointer flex items-center gap-2"
        onClick={onToggle}
      >
        <span>Menu</span>
        <Image src={handleClick()} width={30} height={30} alt="menu" />
      </button>
    </div>
  );
}

export default function NavMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="w-full absolute left-0 top-[90px] bg-onyx-900 p-5 lg:hidden max-[600px]:block">
      <div className="lg:hidden max-[600px]:flex flex-col items-start gap-5 ">
        {NAVBAR.map((link) => (
          <Link
            key={link.key}
            className="font-semibold py-1 px-4 rounded-full hover:bg-onyx-200 dark:hover:bg-onyx-700 transition-colors ease-linear duration-300"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <Hamburger />
    </nav>
  );
}
