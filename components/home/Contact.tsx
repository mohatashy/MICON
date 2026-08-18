"use client";

import { Mail, MapPin, Phone } from "lucide-react";

import Reveal from "@/components/ui/reveal";
import SectionTitle from "@/components/ui/SectionTitle";
import Button from "@/components/ui/Button";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#171A1F] py-32 lg:py-36"
    >
      <div className="container-custom">
        <div className="grid items-start gap-16 lg:grid-cols-[1fr_1fr]">

          {/* LEFT — CONTACT INFO */}

          <Reveal>
            <SectionTitle
              eyebrow="CONTACT US"
              title="Let's Build Your Next Project Together."
              subtitle="Whether you're planning a new construction project, office fit-out or renovation, our team is ready to help."
              theme="dark"
            />

            <div className="mt-12 space-y-4">

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#1F242B] px-6 py-5 transition duration-300 hover:border-orange-500/40">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Phone size={23} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Phone
                  </h4>

                  <p className="mt-1 !text-[16px] !text-slate-300">
                    +20 11 0806 8320
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#1F242B] px-6 py-5 transition duration-300 hover:border-orange-500/40">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <Mail size={23} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Email
                  </h4>

                  <p className="mt-1 !text-[16px] !text-slate-300">
                    info@miconeg.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-[#1F242B] px-6 py-5 transition duration-300 hover:border-orange-500/40">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-orange-500/10 text-orange-500">
                  <MapPin size={23} />
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white">
                    Office
                  </h4>

                  <p className="mt-1 !text-[16px] !text-slate-300">
                    Al Shorouk City, Cairo, Egypt
                  </p>
                </div>
              </div>

            </div>
          </Reveal>

          {/* RIGHT — CONTACT FORM */}

          <Reveal delay={0.2}>
            <div className="rounded-[32px] border border-white/10 bg-[#1F242B] p-8 shadow-[0_25px_70px_rgba(0,0,0,.4)] lg:p-10">

              <div className="mb-7">
                <h3 className="text-3xl font-bold text-white">
                  Start a Conversation
                </h3>

                <p className="mt-2 !text-[16px] !leading-7 !text-slate-300">
                  Tell us a little about your project and our team will get back to you.
                </p>
              </div>

              <form className="space-y-5">

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-white/10 bg-[#252B33] px-5 py-3.5 text-[16px] text-white placeholder:!text-slate-500 outline-none transition focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Email Address
                  </label>

                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-xl border border-white/10 bg-[#252B33] px-5 py-3.5 text-[16px] text-white placeholder:!text-slate-500 outline-none transition focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full rounded-xl border border-white/10 bg-[#252B33] px-5 py-3.5 text-[16px] text-white placeholder:!text-slate-500 outline-none transition focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/20"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Service
                  </label>

                  <select
                    className="w-full rounded-xl border border-white/10 bg-[#252B33] px-5 py-3.5 text-[16px] !text-slate-200 outline-none transition focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/20"
                  >
                    <option>Choose a service</option>
                    <option>Construction</option>
                    <option>Office Fit-Out</option>
                    <option>Interior Design</option>
                    <option>Renovation</option>
                    <option>Maintenance</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-200">
                    Project Details
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-[#252B33] px-5 py-3.5 text-[16px] leading-7 text-white placeholder:!text-slate-500 outline-none transition focus:border-orange-500/70 focus:ring-1 focus:ring-orange-500/20"
                  />
                </div>

                <Button href="#" theme="dark">
                  Send Inquiry
                </Button>

              </form>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
