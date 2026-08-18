"use client";

import {
  Building2,
  Hammer,
  Paintbrush2,
  Wrench,
  Ruler,
  Briefcase,
} from "lucide-react";

import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/reveal";
import ServiceCard from "@/components/ui/ServiceCard";

const services = [
  {
    icon: <Building2 size={34} />,
    title: "Office Fit-Out",
    description:
      "Complete office fit-out solutions that transform empty spaces into productive work environments.",
  },
  {
    icon: <Hammer size={34} />,
    title: "Construction",
    description:
      "High-quality construction services delivered with precision, safety and exceptional craftsmanship.",
  },
  {
    icon: <Paintbrush2 size={34} />,
    title: "Interior Design",
    description:
      "Modern interior concepts that combine functionality, aesthetics and your brand identity.",
  },
  {
    icon: <Wrench size={34} />,
    title: "Renovation",
    description:
      "Renovation and refurbishment solutions that breathe new life into existing spaces.",
  },
  {
    icon: <Ruler size={34} />,
    title: "Space Planning",
    description:
      "Smart layouts that maximize efficiency while maintaining comfort and elegance.",
  },
  {
    icon: <Briefcase size={34} />,
    title: "Maintenance",
    description:
      "Reliable maintenance services that keep your facilities operating at their best.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="bg-[#171A1F] py-32 text-white"
    >
      <div className="container-custom">

        <div className="mx-auto max-w-[1220px]">

          {/* SECTION HEADER */}

          <Reveal>

            <SectionTitle
              eyebrow="OUR SERVICES"
              title="Construction Solutions That Deliver Results."
              subtitle="We provide end-to-end construction, fit-out and renovation services tailored to corporate, commercial and hospitality projects."
              align="center"
              theme="dark"
            />

          </Reveal>

          {/* SERVICES GRID */}

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service, index) => (

              <Reveal
                key={service.title}
                delay={index * 0.08}
              >

                <ServiceCard
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />

              </Reveal>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}