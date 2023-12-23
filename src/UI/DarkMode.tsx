"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const ToggleDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    localStorage.setItem("theme", newDarkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", newDarkMode);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setIsDarkMode(savedTheme === "dark");
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    }
  }, []);

  return (
    <div className="flex relative p-1 rounded-[10px] border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-900 items-center justify-center">
      <input
        className="opacity-0"
        id="toggle-darkmode"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleDarkModeToggle}
      />
      <div className="dark-icon flex items-center justify-center absolute">
        <Image
          className="sun"
          src={"/sun.svg"}
          alt="sun"
          width={22}
          height={22}
        />
        <Image
          className="moon"
          src={"/moon.svg"}
          alt="moon"
          width={22}
          height={22}
        />
      </div>
    </div>
  );
};

export default ToggleDarkMode;
