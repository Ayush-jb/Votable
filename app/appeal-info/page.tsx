"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppeal } from "@/lib/appeal-context";
import { getRequiredDocuments, getAppealDeadline } from "@/lib/data";
import { StepProgress } from "@/components/step-progress";
import { TribunalCard } from "@/components/tribunal-card";
import { DeadlineCard } from "@/components/deadline-card";
import { DocumentChecklist } from "@/components/document-checklist";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AppealInfoPage() {
  const router = useRouter();
  const { voter, tribunal, documents, setDocuments, deadline, setDeadline, checkedDocuments } = useAppeal();
  const [loading, setLoading] = useState(true);

  const mandatoryDocs = documents.filter(d => d.mandatory).map(d => d.id);
  const allMandatoryChecked = mandatoryDocs.length > 0 && mandatoryDocs.every(id => checkedDocuments.includes(id));

  useEffect(() => {
    if (!voter || voter.status !== "excluded") {
      router.push("/");
      return;
    }

    async function loadData() {
      const [docs, dl] = await Promise.all([
        getRequiredDocuments(),
        getAppealDeadline(),
      ]);
      setDocuments(docs);
      setDeadline(dl);
      setLoading(false);
    }
    loadData();
  }, [voter, router, setDocuments, setDeadline]);

  if (loading || !voter || !tribunal || !deadline) {
    return (
      <div className="flex items-center justify-center py-32 bg-[#F7F2EB] min-h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8B9A6E] border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="bg-[#F7F2EB] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <StepProgress currentStep={2} />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8"
        >
          <h1 className="text-2xl font-bold text-[#2D2D2D] sm:text-3xl">
            SIR Appeal Information
          </h1>
          <p className="mt-2 text-sm text-[#2D2D2D]/60">
            Review the tribunal details, deadline, and documents needed for your appeal.
          </p>
        </motion.div>

        {/* Content */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <TribunalCard tribunal={tribunal} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <DeadlineCard deadline={deadline} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <DocumentChecklist documents={documents} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Disclaimer
              text="Tribunal data and deadlines shown in the demo may include illustrative information. Always verify against the latest official notice."
              variant="warning"
            />
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <Link href="/result?status=excluded">
            <Button variant="outline" className="border-[#EAE2D6] text-[#2D2D2D]/60 hover:bg-[#EAE2D6] cursor-pointer">
              <ArrowLeft size={16} className="mr-2" />
              Back
            </Button>
          </Link>
          <div className="flex flex-col sm:items-end">
            <Button 
              className={`bg-[#8B9A6E] hover:bg-[#7A8960] text-white ${!allMandatoryChecked ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
              onClick={() => {
                if (allMandatoryChecked) {
                  router.push("/appeal");
                }
              }}
              disabled={!allMandatoryChecked}
            >
              Continue to appeal form
              <ArrowRight size={16} className="ml-2" />
            </Button>
            {!allMandatoryChecked && (
              <span className="text-xs text-red-500 mt-2 text-center sm:text-right">
                Please check all required documents to continue
              </span>
            )}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
