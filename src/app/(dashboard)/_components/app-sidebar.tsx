"use client";
import DottedSeparator from "@/components/dotted-separator";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Navigation from "./navigation";

const AppSidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Link href={"/"}>
        <Image src={"/logo/logo.svg"} alt="logo" width={100} height={100} />
      </Link>
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};

export default AppSidebar;
