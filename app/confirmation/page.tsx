"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppeal } from "@/lib/appeal-context";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Download, Search, FileText, Calendar, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ConfirmationPage() {
  const router = useRouter();
  const { voter, tribunal, deadline, checkedDocuments, documents, resetAll } = useAppeal();

  useEffect(() => {
    if (!voter || !tribunal) {
      router.push("/");
    }
  }, [voter, tribunal, router]);

  if (!voter || !tribunal) {
    return (
      <div className="flex items-center justify-center py-32 bg-[#F7F2EB] min-h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8B9A6E] border-t-transparent" />
      </div>
    );
  }

  const handleNewSearch = () => {
    resetAll();
    router.push("/");
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="bg-[#F7F2EB] min-h-screen">
      <div className="mx-auto max-w-lg px-4 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-[#EAE2D6] bg-white p-8 text-center shadow-sm"
        >
          {/* Success animation */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#8B9A6E]/10"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <CheckCircle size={40} className="text-[#8B9A6E]" />
            </motion.div>
          </motion.div>

          <h1 className="text-xl font-bold text-[#2D2D2D] sm:text-2xl">
            Your appeal draft is ready.
          </h1>
          <p className="mt-2 text-sm text-[#2D2D2D]/60">
            Your petition document has been generated and is ready to download.
          </p>

          {/* Summary cards */}
          <div className="mt-6 space-y-3 text-left">
            <SummaryItem
              icon={FileText}
              label="Tribunal"
              value={tribunal.tribunalName}
            />
            {deadline && (
              <SummaryItem
                icon={Calendar}
                label="Appeal Deadline"
                value={deadline.displayDate}
              />
            )}
            <SummaryItem
              icon={ClipboardCheck}
              label="Documents Checked"
              value={`${checkedDocuments.length} of ${documents.length} items`}
            />
            <SummaryItem
              icon={FileText}
              label="Petition Status"
              value="Ready to print"
              valueClass="text-[#8B9A6E] font-semibold"
            />
          </div>

          {/* Actions */}
          <div className="mt-8 space-y-3">
            <Button
              onClick={handleDownload}
              className="w-full bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer"
            >
              <Download size={16} className="mr-2" />
              Download PDF
            </Button>
            <Button
              onClick={handleNewSearch}
              variant="outline"
              className="w-full border-[#EAE2D6] text-[#2D2D2D]/60 hover:bg-[#EAE2D6] cursor-pointer"
            >
              <Search size={16} className="mr-2" />
              Start a new search
            </Button>
          </div>
        </motion.div>

        {/* Informational note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-6"
        >
          <Disclaimer
            text="Remember to review, sign and submit your appeal through the appropriate official channel."
          />
          <div className="mt-3">
            <Disclaimer
              text="Votable does not submit appeals on your behalf. The generated document is a formatted draft for your use."
              variant="subtle"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function SummaryItem({
  icon: Icon,
  label,
  value,
  valueClass,
}: {
  icon: React.ComponentType<{ size: number; className?: string }>;
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-[#F7F2EB] p-3">
      <Icon size={16} className="shrink-0 text-[#8B9A6E]" />
      <div className="flex-1 min-w-0">
        <p className="text-[11px] font-medium uppercase tracking-wider text-[#2D2D2D]/40">
          {label}
        </p>
        <p className={`text-sm font-medium text-[#2D2D2D] truncate ${valueClass || ""}`}>
          {value}
        </p>
      </div>
    </div>
  );
}
