"use client";
import Image from "next/image";
import { IconsUI } from "../constants/Icons";
import React, { useState, useEffect } from "react";

export default function SearchIndex() {
  return (
    <div className="flex items-center relative">
      <input
        className="ml-5 text-onyx-900 h-[30px] rounded-full outline-none min-w-[250px] pl-[40px]"
        type="search"
        name=""
        id=""
        placeholder={"Quick search..."}
      />
      <div className="absolute fill-onyx-800 left-7">{IconsUI.search}</div>
    </div>
  );
}
