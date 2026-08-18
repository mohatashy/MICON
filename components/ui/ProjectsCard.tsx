"use client";

import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";

type ProjectCardProps = {
  image: string;
  title: string;
  client: string;
  category: string;
  location: string;
  year: string;
  featured?: boolean;
};

export default function ProjectCard({
  image,
  title,
  client,
  category,
  location,
  year,
  featured = false,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      transition={{ duration: 0.35 }}
      className="
        group
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#1A1D22]
        shadow-[0_20px_60px_rgba(0,0,0,.35)]
        transition-all
        duration-300
        hover:border-orange-500/40
        hover:bg-[#1E2228]
        hover:shadow-[0_30px_80px_rgba(0,0,0,.50)]
      "
    >
      {/* IMAGE */}

      <div
        className={`relative shrink-0 overflow-hidden ${
          featured ? "h-[580px]" : "h-[235px]"
        }`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
          className="
            object-cover
            transition-transform
            duration-700
            group-hover:scale-[1.06]
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black/60
            via-black/5
            to-transparent
          "
        />

        {/* CATEGORY */}

        <div
          className="
            absolute
            bottom-5
            left-6
            rounded-full
            border
            border-orange-500/30
            bg-black/50
            px-4
            py-2
            backdrop-blur-md
          "
        >
          <span
            className="
              text-[11px]
              font-bold
              uppercase
              tracking-[0.18em]
              text-orange-400
            "
          >
            {category}
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="flex flex-1 flex-col p-6">

        {/* TITLE */}

        <h3
          className="
            text-[26px]
            font-bold
            leading-tight
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* CLIENT */}

        <p
          className="
            mt-4
            text-[16px]
            font-medium
            !text-[#AEB6C2]
          "
        >
          {client}
        </p>

        {/* META */}

        <div
          className="
            mt-7
            flex
            items-center
            justify-between
            border-t
            border-white/10
            pt-6
            text-[14px]
            font-medium
            !text-[#AEB6C2]
          "
        >
          <div className="flex items-center gap-2">

            <MapPin
              size={17}
              strokeWidth={2}
              className="text-orange-500"
            />

            <span>{location}</span>

          </div>

          <span>{year}</span>

        </div>

        {/* LINK */}

        <button
          type="button"
          className="
            mt-auto
            flex
            items-center
            gap-2
            pt-8
            text-[15px]
            font-semibold
            text-orange-500
            transition-all
            duration-300
            group-hover:gap-4
          "
        >
          <span>View Project</span>

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