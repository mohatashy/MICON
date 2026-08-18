"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

type StatsCardProps = {
  number: string;
  label: string;
};

export default function StatsCard({
  number,
  label,
}: StatsCardProps) {
  const value = parseInt(number.replace(/\D/g, ""), 10);
  const suffix = number.replace(/[0-9]/g, "");

  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        rounded-[28px]
        border
        border-white/10
        bg-[#1A1E24]
        p-8
        transition-all
        hover:border-orange-500/30
        hover:shadow-[0_25px_60px_rgba(0,0,0,.35)]
      "
    >
      <h3
        className="
          text-5xl
          font-black
          tracking-[-0.04em]
          text-orange-500
        "
      >
        <CountUp
          end={value}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
        />
        {suffix}
      </h3>

      <div
        className="
          mt-5
          h-[3px]
          w-14
          rounded-full
          bg-orange-500
          transition-all
          group-hover:w-20
        "
      />

      <p
        className="
          mt-5
          text-base
          leading-7
          text-gray-400
        "
      >
        {label}
      </p>
    </motion.div>
  );
}