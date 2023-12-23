"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";

export function Hamburger({ onToggle, children }: { onToggle: () => void }) {
  return (
    <div className="lg:hidden max-[600px]:flex">
      <button
        className="cursor-pointer flex items-center gap-2"
        onClick={onToggle}
      >
        {children}
      </button>
    </div>
  );
}
export default function NavMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav>
      <div className="lg:hidden md:flex md:flex-col items-center gap-1">
        {NAVBAR.map((link) => (
          <Link
            key={link.key}
            className="font-semibold py-1 px-4 rounded-full hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors ease-linear duration-300"
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
