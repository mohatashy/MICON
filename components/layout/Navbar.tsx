"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const links = [
  { name: "ABOUT", href: "#about" },
  { name: "SERVICES", href: "#services" },
  { name: "PROJECTS", href: "#projects" },
  { name: "CONTACT", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur-xl">

      <div className="container-custom flex h-[96px] items-center justify-between">

        {/* Logo */}

        <Link href="/" className="flex items-center">
          <Image
            src="/logo/micon-logo.png"
            alt="MICON"
            width={320}
            height={88}
            priority
            className="h-20 w-auto"
          />
        </Link>

        {/* Desktop Navigation */}

        <nav className="hidden items-center gap-10 lg:flex">

          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="
                group
                relative
                py-3
                text-[14px]
                font-semibold
                tracking-[1.4px]
                !text-white/85
                transition-all
                duration-300
                hover:!text-[#C98A2E]
              "
            >
              {link.name}

              <span
                className="
                  absolute
                  bottom-0
                  left-1/2
                  h-[2px]
                  w-0
                  -translate-x-1/2
                  rounded-full
                  bg-[#C98A2E]
                  transition-all
                  duration-300
                  group-hover:w-5/6
                "
              />
            </Link>
          ))}

        </nav>

        {/* CTA */}

        <Link
          href="#contact"
          className="
            hidden
            items-center
            justify-center
            rounded-full
            border
            border-[#C98A2E]/90
            bg-[#C98A2E]
            px-9
            py-3.5
            text-[12px]
            font-bold
            tracking-[1.1px]
            !text-white
            shadow-[0_4px_18px_rgba(201,138,46,0.18)]
            transition-all
            duration-300
            hover:bg-[#B77A22]
            hover:shadow-[0_7px_26px_rgba(201,138,46,0.30)]
            lg:inline-flex
          "
        >
          START A PROJECT
        </Link>

        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="!text-white transition hover:!text-[#C98A2E] lg:hidden"
          aria-label="Toggle Menu"
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-white/10 bg-black/95 backdrop-blur-xl lg:hidden">

          <nav className="container-custom flex flex-col py-6">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="
                  border-b
                  border-white/10
                  py-4
                  text-sm
                  font-semibold
                  tracking-[2px]
                  !text-white
                  transition
                  hover:!text-[#C98A2E]
                "
              >
                {link.name}
              </Link>
            ))}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="
                mt-6
                inline-flex
                items-center
                justify-center
                rounded-full
                border
                border-[#C98A2E]
                bg-[#C98A2E]
                px-9
                py-4
                text-sm
                font-semibold
                tracking-wide
                !text-white
                transition
                hover:bg-[#B77A22]
              "
            >
              START A PROJECT
            </Link>

          </nav>

        </div>
      )}

    </header>
  );
}
