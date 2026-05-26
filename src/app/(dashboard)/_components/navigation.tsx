"use client";
import { RiSettings2Line } from "react-icons/ri";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { FaUsers, FaUsersBetweenLines } from "react-icons/fa6";
import Link from "next/link";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: RiSettings2Line,
    activeIcon: RiSettings2Line,
  },
  {
    label: "Members",
    href: "/members",
    icon: FaUsers,
    activeIcon: FaUsersBetweenLines,
  },
];

const Navigation = () => {
  return (
    <ul className="flex flex-col">
      {routes.map((item) => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <li key={item.href}>
            <Link href={item.href}>
              <div
                className={cn(
                  "flex items-center gap-2.5 p-2.5 rounded-md font-medium hover:text-primary transition text-neutral-500",
                  isActive &&
                    "bg-white shadow-sm hover:opacity-100 text-primary",
                )}
              >
                <Icon className="size-5 text-neutral-500" />
                {item.label}
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Navigation;
