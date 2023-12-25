"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAVBAR } from "@/src/constants/data";
import { motion } from "framer-motion";
import DarkMode from "@/src/UI/DarkMode";
import SearchIndex from "@/src/UI/SearchIndex";
const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};
interface MobileProps {
  closeMenu: () => void;
}

export default function NavMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.nav
      className="w-full absolute left-0 top-[70px] bg-onyx-50 dark:bg-onyx-900 p-5 rounded-b-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="w-full">
        <SearchIndex />
      </div>
      <div className="grid gap-1 w-full">
        {NAVBAR.map((link) => (
          <Link
            key={link.key}
            className="font-semibold py-2 px-4 rounded-full hover:bg-onyx-200 dark:hover:bg-onyx-700 transition-colors ease-linear duration-300"
            href={link.href}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <DarkMode />
    </motion.nav>
  );
}
