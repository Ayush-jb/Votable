"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { Suspense } from "react";
import { useAppeal } from "@/lib/appeal-context";
import { StatusBadge } from "@/components/status-badge";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { maskEpic } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle, ArrowRight, RotateCcw, Info } from "lucide-react";
import Link from "next/link";
import type { VoterStatus } from "@/lib/types";

function ResultContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { voter, state } = useAppeal();
  const status = (searchParams.get("status") as VoterStatus) || "not_found";

  if (status === "included" && voter) {
    return <IncludedResult voter={voter} />;
  }

  if (status === "excluded" && voter) {
    return <ExcludedResult voter={voter} stateName={state?.name} />;
  }

  return <NotFoundResult onRetry={() => router.push("/")} />;
}

function IncludedResult({ voter }: { voter: { fullName: string; epicNumber: string } }) {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-[#8B9A6E]/20 bg-white p-8 text-center shadow-sm"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#8B9A6E]/10"
        >
          <CheckCircle size={32} className="text-[#8B9A6E]" />
        </motion.div>

        <StatusBadge status="included" />

        <h1 className="mt-4 text-xl font-bold text-[#2D2D2D]">
          Your name is included in the SIR list.
        </h1>
        <p className="mt-2 text-sm text-[#2D2D2D]/60">
          Based on the information provided, a matching record was found in the available SIR
          dataset.
        </p>

        <div className="mt-6 rounded-lg bg-[#F7F2EB] p-4 text-left">
          <div className="space-y-2">
            <InfoItem label="Status" value="Included" valueClass="text-[#8B9A6E] font-semibold" />
            <InfoItem label="EPIC" value={maskEpic(voter.epicNumber)} />
            <InfoItem label="Name" value={voter.fullName} />
          </div>
        </div>

        <div className="mt-6 space-y-3 flex flex-col items-center">
          <Link href="/" className="w-full">
            <Button className="w-full bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer">
              Check another EPIC
            </Button>
          </Link>
          <a href="/#sources" className="text-xs text-[#2D2D2D]/40 hover:text-[#8B9A6E] transition-colors">
            About this result
          </a>
        </div>
      </motion.div>

      <div className="mt-6">
        <Disclaimer
          text="This result is based on the application's available dataset and may not reflect the most current official records."
          variant="subtle"
        />
      </div>
    </div>
  );
}

function ExcludedResult({ voter, stateName }: { voter: { fullName: string; epicNumber: string; district: string; stateCode: string }; stateName?: string }) {
  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Status card */}
        <div className="rounded-xl border border-amber-200 bg-white p-6 sm:p-8">
          <StatusBadge status="excluded" />

          <h1 className="mt-4 text-xl font-bold text-[#2D2D2D] sm:text-2xl">
            Your record is marked as excluded.
          </h1>
          <p className="mt-2 text-sm text-[#2D2D2D]/60 leading-relaxed">
            The available dataset does not show a matching entry in the SIR electoral roll. If you
            believe this is incorrect, Votable can help you understand the next steps.
          </p>

          <div className="mt-5">
            <Disclaimer
              text="Being marked as excluded by this application does not determine whether an exclusion is legally valid. The relevant authority decides appeals."
              variant="warning"
            />
          </div>

          {/* Voter info */}
          <div className="mt-6">
            <h2 className="text-sm font-semibold text-[#2D2D2D]/70 mb-3">Your information</h2>
            <div className="grid grid-cols-2 gap-3 rounded-lg bg-[#F7F2EB] p-4">
              <InfoItem label="Name" value={voter.fullName} />
              <InfoItem label="EPIC Number" value={maskEpic(voter.epicNumber)} />
              <InfoItem label="State" value={stateName || voter.stateCode} />
              <InfoItem label="District" value={voter.district} />
            </div>
          </div>

          <div className="mt-6">
            <Link href="/appeal-info">
              <Button className="w-full sm:w-auto bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer">
                View appeal information
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

function NotFoundResult({ onRetry }: { onRetry: () => void }) {
  return (
    <div className="mx-auto max-w-lg px-4 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl border border-[#EEEEEE] bg-white p-8 text-center shadow-sm"
      >
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#EEEEEE]">
          <AlertCircle size={32} className="text-[#2D2D2D]/40" />
        </div>

        <StatusBadge status="not_found" />

        <h1 className="mt-4 text-xl font-bold text-[#2D2D2D]">
          EPIC number or Name did not match
        </h1>
        <p className="mt-2 text-sm text-[#2D2D2D]/60">
          The details you entered do not match the expected format or could not be found in
          the available dataset. Please check for typos.
        </p>

        <div className="mt-6">
          <Button
            onClick={onRetry}
            className="w-full bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer"
          >
            <RotateCcw size={16} className="mr-2" />
            Try again
          </Button>
        </div>
      </motion.div>
    </div>
  );
}

function InfoItem({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wider text-[#2D2D2D]/40">
        {label}
      </p>
      <p className={`mt-0.5 text-sm font-medium text-[#2D2D2D] ${valueClass || ""}`}>{value}</p>
    </div>
  );
}

export default function ResultPage() {
  return (
    <div className="bg-[#F7F2EB] min-h-screen">
      <Suspense fallback={
        <div className="flex items-center justify-center py-32">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8B9A6E] border-t-transparent" />
        </div>
      }>
        <ResultContent />
      </Suspense>
    </div>
  );
}
