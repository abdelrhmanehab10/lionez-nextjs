"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

import Links from "./links";

import { Menu } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { routes } from "@/constant/routes";
import { usePathname } from "next/navigation";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  const { scrollYProgress } = useScroll();
  const bgColorOutput = ["#00000000", "#000000a7"];
  const bgColor = useTransform(scrollYProgress, [0, 0.1], bgColorOutput);

  const pathname = usePathname();

  return (
    <motion.nav
      style={{
        borderBottomWidth: scrollYProgress,
        backgroundColor: bgColor,
      }}
      whileInView={{ backgroundColor: "transparent" }}
      className="fixed text-main-orange h-24 top-0 right-0 left-0 z-40 
      flex items-center justify-between 
      py-2 px-4 border-b border-main-orange"
    >
      <div className="w-full p-3 flex justify-between items-center">
        <Link href="/">
          <motion.div
            initial={{ translateX: "300px" }}
            animate={{ translateX: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src="/logo.png"
              width={300}
              height={300}
              alt="سيرفر عرب ليونز"
              className="w-20"
            />
          </motion.div>
        </Link>
        <motion.div
          initial={{ translateX: "-300px" }}
          animate={{ translateX: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DropdownMenu dir="rtl">
            <DropdownMenuTrigger className="md:hidden">
              <Menu className="text-white w-6 h-6" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-[34px] border-0 w-screen rounded-none bg-black/80 text-white">
              {routes.map((route, idx) => (
                <DropdownMenuItem
                  asChild
                  key={idx}
                  className={cn(
                    "py-3",
                    pathname === route.href
                      ? "mr-5 border-b border-main-orange text-main-orange font-extrabold rounded-none"
                      : ""
                  )}
                >
                  <Link href={route.href}>{route.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </motion.div>
        <div className={"hidden w-full md:flex md:justify-end"}>
          <Links />
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
