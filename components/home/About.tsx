"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import SectionTitle from "@/components/ui/SectionTitle";
import StatsCard from "@/components/ui/StatsCard";
import Button from "@/components/ui/Button";

export default function About() {
  return (
    <section
      id="about"
      className="bg-[#121417] py-36 text-white"
    >
      <div className="container-custom">

        <div className="mx-auto max-w-[1220px]">

          <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">

            {/* LEFT — IMAGES */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto w-full max-w-[500px]"
            >

              {/* Main Image */}

              <div
                className="
                  relative
                  aspect-[4/5]
                  w-full
                  overflow-hidden
                  rounded-[36px]
                  border
                  border-white/10
                  shadow-[0_35px_90px_rgba(0,0,0,.45)]
                "
              >

                <Image
                  src="/images/about/1.jpg"
                  alt="About MICON"
                  fill
                  sizes="(max-width: 1024px) 90vw, 500px"
                  className="
                    object-cover
                    transition
                    duration-700
                    hover:scale-[1.04]
                  "
                />

              </div>

              {/* Secondary Image */}

              <div
                className="
                  absolute
                  -bottom-8
                  -right-8
                  z-10
                  w-44
                  overflow-hidden
                  rounded-[26px]
                  border-4
                  border-[#121417]
                  bg-[#121417]
                  shadow-2xl
                  sm:w-52
                "
              >

                <div className="relative aspect-square">

                  <Image
                    src="/images/about/2.jpg"
                    alt="MICON Construction"
                    fill
                    sizes="208px"
                    className="
                      object-cover
                      transition
                      duration-700
                      hover:scale-[1.04]
                    "
                  />

                </div>

              </div>

            </motion.div>

            {/* RIGHT — CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >

              <SectionTitle
                eyebrow="ABOUT MICON"
                title="Engineering Spaces That Inspire."
                theme="dark"
              />

              <p
                className="
                  mt-8
                  max-w-[620px]
                  text-[20px]
                  leading-9
                  text-gray-300
                "
              >
                MICON specializes in premium construction,
                interior fit-out and renovation solutions
                for corporate offices, hospitality venues
                and commercial environments across Egypt.
              </p>

              <p
                className="
                  mt-7
                  max-w-[620px]
                  text-[17px]
                  leading-8
                  text-gray-300
                "
              >
                Every project is executed with precision,
                attention to detail and a commitment to
                delivering spaces that combine quality,
                functionality and timeless design.
              </p>

              {/* STATS */}

              <div className="mt-12 grid max-w-[620px] grid-cols-2 gap-5">

                <StatsCard
                  number="12+"
                  label="Years Experience"
                />

                <StatsCard
                  number="150+"
                  label="Completed Projects"
                />

                <StatsCard
                  number="40+"
                  label="Corporate Clients"
                />

                <StatsCard
                  number="100%"
                  label="Client Satisfaction"
                />

              </div>

              {/* BUTTON */}

              <div className="mt-10">

                <Button
                  href="#projects"
                  theme="dark"
                >
                  View Projects
                </Button>

              </div>

            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
