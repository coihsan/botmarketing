"use client";
import Image from "next/image";
import { IconsUI } from "../constants/Icons";
import React, { useState, useEffect } from "react";

export default function SearchIndex() {
  return (
    <div className="flex items-center w-full relative">
      <input
        className="w-full text-onyx-900 h-[40px] rounded-lg outline-none pl-[40px] dark:bg-onyx-800 dark:text-white"
        type="search"
        name=""
        id=""
        placeholder={"Quick search..."}
      />
      <div className="absolute fill-onyx-800 dark:fill-onyx-600 left-2">
        {IconsUI.search}
      </div>
    </div>
  );
}
