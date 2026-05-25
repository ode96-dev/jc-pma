"use client";
import { Button, buttonVariants } from "@/components/ui/button";
import { usePathname } from "next/dist/client/components/navigation";
import Image from "next/image";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image
            loading="eager"
            src={"/logo/logo.svg"}
            height={100}
            width={100}
            alt="logo"
          />{" "}
          <div className="flex items-center gap-2">
            <Link
              href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}
              className={buttonVariants({ variant: "outline" })}
            >
              {pathname === "/sign-in" ? "Sign up" : "Login"}
            </Link>
          </div>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
}
