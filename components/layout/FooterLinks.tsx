"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

export default function FooterLinks() {
  return (
    <footer className="w-full bg-black text-white">

      <div
        style={{
          width: "92%",
          maxWidth: "1280px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >

        {/* FOOTER CONTENT */}

        <div className="grid gap-12 border-b border-white/10 py-16 md:grid-cols-2 lg:grid-cols-12">

          {/* LOGO + DESCRIPTION */}

          <div className="lg:col-span-5">

            <Image
              src="/logo/micon-logo.png"
              alt="MICON Construction"
              width={220}
              height={85}
              className="h-auto w-[180px]"
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-gray-400">
              MICON delivers premium construction, interior fit-out and
              renovation solutions with exceptional quality, precision and
              attention to detail.
            </p>

          </div>

          {/* COMPANY */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Company
            </h3>

            <div className="space-y-3">

              <Link
                href="#about"
                className="block text-sm text-gray-400 transition hover:text-orange-500"
              >
                About
              </Link>

              <Link
                href="#services"
                className="block text-sm text-gray-400 transition hover:text-orange-500"
              >
                Services
              </Link>

              <Link
                href="#projects"
                className="block text-sm text-gray-400 transition hover:text-orange-500"
              >
                Projects
              </Link>

              <Link
                href="#contact"
                className="block text-sm text-gray-400 transition hover:text-orange-500"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* SERVICES */}

          <div className="lg:col-span-2">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Services
            </h3>

            <div className="space-y-3 text-sm text-gray-400">

              <p>Construction</p>
              <p>Interior Fit-Out</p>
              <p>Renovation</p>
              <p>Interior Design</p>
              <p>Maintenance</p>

            </div>

          </div>

          {/* CONTACT */}

          <div className="lg:col-span-3">

            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-white">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">

                <Phone
                  size={17}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <span className="text-sm text-gray-400">
                  +20 110 806 8320
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Mail
                  size={17}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <span className="text-sm text-gray-400">
                  info@miconeg.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={17}
                  className="mt-0.5 shrink-0 text-orange-500"
                />

                <span className="text-sm leading-6 text-gray-400">
                  Al Shorouk City,
                  <br />
                  Cairo, Egypt
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* COPYRIGHT */}

        <div className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-gray-500 md:flex-row">

          <p>
            © {new Date().getFullYear()} MICON. All Rights Reserved.
          </p>

          <p>
            Designed &amp; Developed by MICON
          </p>

        </div>

      </div>

    </footer>
  );
}