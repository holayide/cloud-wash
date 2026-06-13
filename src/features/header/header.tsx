"use client";

import { useState } from "react";
import Image from "next/image";

import { HamburgerIcon } from "@/components/icons/icons";
import NavLink, { MobileMenu } from "./navbar";
import Button from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  variant?: "default" | "contact" | "policy";
  className?: string;
}

export default function Header({
  variant = "default",
  className,
}: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* px-4 sm:px-6 md:px-8 lg:px-12 xl:px-30 */}
      <header
        className={`w-full h-auto ${variant === "default" || variant === "policy" ? "sm:mt-8" : "md:h-20 flex items-center justify-center bg-white pt-6 pb-6 sm:pt-12 sm:pb-14"}`}
      >
        <div className="w-full max-w-420 mx-auto px-4 sm:px-8 md:px-12">
          <div
            className={`w-full py-4 flex items-center justify-between rounded-lg ${
              variant === "default"
                ? "px-4 lg:bg-white/42 lg:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                : variant === "policy"
                  ? "px-4 lg:bg-gray-50/50 lg:shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
                  : ""
            }`}
          >
            <Link
              href="/"
              className="relative w-[80px] h-[40px] sm:w-[130px] sm:h-[56px]"
            >
              <Image
                src="/assets/logo.png"
                alt="Cloudwash Logo"
                width={130}
                height={56}
                className="object-contain"
                priority
              />
            </Link>

            <NavLink />

            <Button className="hidden lg:block max-w-[168px] w-full font-inter">
              Get started
            </Button>

            <button
              className="lg:hidden p-2"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu  */}
      {isOpen && <MobileMenu toggleMenu={toggleMenu} />}
    </>
  );
}
