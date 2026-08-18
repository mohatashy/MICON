"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type ServiceCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

export default function ServiceCard({
  icon,
  title,
  description,
}: ServiceCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.015,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
        group
        relative
        flex
        min-h-[300px]
        flex-col
        items-center
        justify-center
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#1F242B]
        px-8
        py-10
        text-center
        shadow-[0_15px_40px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:border-orange-500/40
        hover:bg-[#252B33]
        hover:shadow-[0_30px_70px_rgba(0,0,0,.45)]
      "
    >
      {/* Subtle Orange Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-40
          w-40
          rounded-full
          bg-orange-500/5
          blur-3xl
          transition
          duration-500
          group-hover:bg-orange-500/10
        "
      />

      {/* Card Content */}

      <div className="relative flex flex-col items-center">

        {/* Icon */}

        <div
          className="
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            border
            border-orange-500/10
            bg-orange-500/10
            text-orange-500
            transition-all
            duration-300
            group-hover:border-orange-500
            group-hover:bg-orange-500
            group-hover:text-white
          "
        >
          {icon}
        </div>

        {/* Title */}

        <h3
          className="
            mt-5
            text-[25px]
            font-bold
            leading-tight
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* Small Accent Line */}

        <div
          className="
            mt-4
            h-[2px]
            w-6
            rounded-full
            bg-orange-500
            transition-all
            duration-300
            group-hover:w-10
          "
        />

        {/* Description */}

        <p
          className="
            mt-4
            max-w-[330px]
            text-[17px]
            font-medium
            leading-8
            text-[#AEB6C2]
          "
        >
          {description}
        </p>

        {/* Link */}

        <button
          type="button"
          className="
            mt-5
            inline-flex
            items-center
            justify-center
            gap-2
            text-[16px]
            font-semibold
            text-orange-500
            transition-all
            duration-300
            group-hover:gap-4
          "
        >
          <span>Learn More</span>

          <ArrowRight
            size={18}
            className="
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
          />
        </button>

      </div>
    </motion.div>
  );
}