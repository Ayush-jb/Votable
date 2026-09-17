"use client";

import { SearchCard } from "@/components/search-card";
import { Disclaimer } from "@/components/disclaimer";
import { SourceCard } from "@/components/source-card";
import { motion } from "framer-motion";
import { Search, CheckCircle, HelpCircle, ShieldCheck } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function HomePage() {
  return (
    <div className="bg-[#F7F2EB]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle geometric background pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full border border-[#8B9A6E]" />
          <div className="absolute top-40 right-20 w-48 h-48 rounded-full border border-[#8B9A6E]" />
          <div className="absolute bottom-10 left-1/3 w-32 h-32 rounded-full border border-[#8B9A6E]" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
          <div className="text-center">
            <motion.div {...fadeInUp} transition={{ duration: 0.5 }}>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#EAE2D6] bg-white px-4 py-1.5 text-xs font-medium text-[#8B9A6E]">
                SIR 2026 &bull; Electoral Roll Assistance
              </span>
            </motion.div>

            <motion.h1
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-6 text-4xl font-bold tracking-tight text-[#2D2D2D] sm:text-5xl lg:text-6xl"
            >
              Check your SIR status.
            </motion.h1>

            <motion.p
              {...fadeInUp}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mx-auto mt-4 max-w-xl text-base text-[#2D2D2D]/60 sm:text-lg"
            >
              Find out whether your name is included in the SIR electoral roll and
              understand what to do if you have been excluded.
            </motion.p>
          </div>

          {/* Search Card */}
          <div className="mt-10">
            <SearchCard />
          </div>

          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-4 text-center"
          >
            <p className="text-xs text-[#2D2D2D]/40">
              Demo currently covers West Bengal and Bihar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How it Works */}
      <section id="how-it-works" className="bg-white border-y border-[#EAE2D6]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl font-bold text-[#2D2D2D] sm:text-3xl">How it works</h2>
            <p className="mt-2 text-sm text-[#2D2D2D]/50">Three simple steps</p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                step: "01",
                icon: Search,
                title: "Search",
                desc: "Enter your EPIC number and name.",
              },
              {
                step: "02",
                icon: CheckCircle,
                title: "Check",
                desc: "We match your information with the available SIR dataset.",
              },
              {
                step: "03",
                icon: HelpCircle,
                title: "Understand your options",
                desc: "If your record is marked excluded, we show the relevant appeal information, documents and next steps.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-xl border border-[#EAE2D6] bg-[#F7F2EB] p-6"
              >
                <span className="text-3xl font-bold text-[#8B9A6E]/20">{item.step}</span>
                <div className="mt-3 flex items-center gap-2">
                  <item.icon size={18} className="text-[#8B9A6E]" />
                  <h3 className="text-base font-semibold text-[#2D2D2D]">{item.title}</h3>
                </div>
                <p className="mt-2 text-sm text-[#2D2D2D]/60 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Votable */}
      <section id="about" className="bg-[#F7F2EB]">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <ShieldCheck size={20} className="text-[#8B9A6E]" />
              <h2 className="text-2xl font-bold text-[#2D2D2D]">Why Votable?</h2>
            </div>
            <p className="text-sm text-[#2D2D2D]/60 leading-relaxed">
              Information about the SIR process, appeal deadlines, tribunal details, and required
              documents is often distributed across multiple official notices, legal documents, and
              government information sources. Votable brings this information together in one
              accessible place to help voters understand their status and options.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sources & Limitations */}
      <section id="sources" className="bg-[#EAE2D6]/30 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Sources */}
            <div>
              <h2 className="text-xl font-bold text-[#2D2D2D] mb-6">Data Sources</h2>
              <div className="space-y-4">
                <SourceCard 
                  title="Election Commission of India (ECI)" 
                  description="Guidelines and forms for Special Intensive Revision (SIR) and Section 24a of RP Act, 1950."
                />
                <SourceCard 
                  title="CEO West Bengal" 
                  description="Official District Election Officer (DEO) information and appellate tribunal locations for Kolkata."
                />
                <SourceCard 
                  title="CEO Bihar" 
                  description="Official District Election Officer (DEO) and Collectorate details for Patna."
                />
              </div>
            </div>

            {/* Limitations */}
            <div>
              <h2 className="text-xl font-bold text-[#2D2D2D] mb-6">Limitations</h2>
              <div className="space-y-4">
                <Disclaimer
                  text="Votable is an independent civic-information prototype designed for a hackathon. It is not an official Election Commission website."
                  variant="warning"
                />
                <Disclaimer
                  text="Voter records (like EPIC numbers and names) in this prototype are entirely mock/fake data used for illustrative purposes only."
                  variant="subtle"
                />
                <Disclaimer
                  text="While official titles and addresses are accurate, always cross-reference with official government portals before filing legal documents."
                  variant="default"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
