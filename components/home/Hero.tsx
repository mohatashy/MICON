"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0B0B0B] text-white">

      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute left-[-250px] top-[-250px] h-[600px] w-[600px] rounded-full bg-orange-500/10 blur-[140px]" />

        <div className="absolute bottom-[-300px] right-[-250px] h-[700px] w-[700px] rounded-full bg-orange-500/5 blur-[180px]" />

      </div>

      {/* Main Container */}

      <div className="container-custom relative z-10">

        <div className="mx-auto max-w-[1380px]">

          <div className="grid min-h-[92vh] items-center gap-16 pt-28 pb-24 lg:grid-cols-[0.95fr_1.05fr]">

            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-[560px]"
            >

              <span
                className="
                  inline-flex
                  items-center
                  rounded-full
                  border
                  border-orange-500/30
                  bg-orange-500/10
                  px-5
                  py-2
                  text-sm
                  font-semibold
                  tracking-[0.18em]
                  text-orange-400
                "
              >
                PREMIUM CONSTRUCTION & INTERIOR FIT-OUT
              </span>

              <h1
                className="
                  mt-10
                  text-[62px]
                  font-black
                  leading-[0.90]
                  tracking-[-0.05em]
                  lg:text-[82px]
                "
              >
                Building
                <br />
                Spaces
                <br />
                That Inspire.
              </h1>

              <p
                className="
                  mt-10
                  max-w-[560px]
                  text-[20px]
                  leading-9
                  text-gray-300
                "
              >
                MICON delivers premium construction,
                renovation and interior fit-out
                solutions for corporate offices,
                commercial spaces and hospitality
                projects across Egypt.
              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <a
                  href="#projects"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    bg-orange-500
                    px-9
                    py-4
                    text-[16px]
                    font-semibold
                    text-white
                    transition
                    hover:scale-[1.03]
                    hover:bg-orange-400
                  "
                >
                  View Projects
                </a>

                <a
                  href="#contact"
                  className="
                    inline-flex
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/15
                    px-9
                    py-4
                    text-[16px]
                    font-semibold
                    text-white
                    transition
                    hover:border-orange-500
                    hover:bg-orange-500
                  "
                >
                  Contact Us
                </a>

              </div>

              <div className="mt-16 grid grid-cols-3 gap-10">

                <div>
                  <h3 className="text-4xl font-black text-orange-500">
                    150+
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Projects
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-orange-500">
                    40+
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Clients
                  </p>
                </div>

                <div>
                  <h3 className="text-4xl font-black text-orange-500">
                    12+
                  </h3>

                  <p className="mt-2 text-gray-400">
                    Years
                  </p>
                </div>

              </div>

            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >

              <div
                className="
                  relative
                  overflow-hidden
                  rounded-[40px]
                  border
                  border-white/10
                  bg-[#151515]
                  shadow-[0_45px_120px_rgba(0,0,0,.55)]
                "
              >

                <Image
                  src="/images/hero/hero.jpg"
                  alt="MICON Project"
                  width={1200}
                  height={1450}
                  priority
                  className="
                    h-[760px]
                    w-full
                    object-cover
                    transition
                    duration-700
                    hover:scale-[1.04]
                  "
                />

                {/* Gradient */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/45
                    via-transparent
                    to-transparent
                  "
                />

                {/* Floating Card */}

                <div
                  className="
                    absolute
                    bottom-8
                    left-8
                    rounded-3xl
                    border
                    border-white/10
                    bg-black/45
                    px-7
                    py-6
                    backdrop-blur-xl
                  "
                >

                  <p
                    className="
                      text-sm
                      uppercase
                      tracking-[0.18em]
                      text-orange-400
                    "
                  >
                    Featured Project
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">
                    ABB Office
                    <br />
                    Renovation
                  </h3>

                  <p className="mt-3 text-gray-300">
                    Cairo · Egypt
                  </p>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </div>

    </section>
  );
}