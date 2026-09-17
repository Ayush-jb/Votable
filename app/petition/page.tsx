"use client";

import { useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppeal } from "@/lib/appeal-context";
import { StepProgress } from "@/components/step-progress";
import { PetitionPreview } from "@/components/petition-preview";
import { Disclaimer } from "@/components/disclaimer";
import { Button } from "@/components/ui/button";
import { Download, Printer, ArrowLeft, Edit, FileText } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function PetitionPage() {
  const router = useRouter();
  const { appealFormData } = useAppeal();
  const printRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!appealFormData) {
      router.push("/");
    }
  }, [appealFormData, router]);

  if (!appealFormData) {
    return (
      <div className="flex items-center justify-center py-32 bg-[#F7F2EB] min-h-screen">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#8B9A6E] border-t-transparent" />
      </div>
    );
  }

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    // For prototype: trigger print dialog which allows Save as PDF
    window.print();
  };

  return (
    <div className="bg-[#F7F2EB] min-h-screen">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Progress - hidden in print */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 print:hidden"
        >
          <StepProgress currentStep={4} />
        </motion.div>

        {/* Title - hidden in print */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 print:hidden"
        >
          <h1 className="text-2xl font-bold text-[#2D2D2D] sm:text-3xl">
            Review your appeal
          </h1>
          <p className="mt-2 text-sm text-[#2D2D2D]/60">
            Preview the generated petition document below. Review all information carefully before printing.
          </p>
        </motion.div>

        {/* Petition document */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8"
        >
          <PetitionPreview ref={printRef} data={appealFormData} />
        </motion.div>

        {/* Action panel - hidden in print */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="print:hidden"
        >
          <div className="rounded-xl border border-[#EAE2D6] bg-white p-6">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={18} className="text-[#8B9A6E]" />
              <h2 className="text-base font-semibold text-[#2D2D2D]">
                Your document is ready to review
              </h2>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 mb-4">
              <Button
                onClick={handleDownload}
                className="bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer flex-1"
              >
                <Download size={16} className="mr-2" />
                Download PDF
              </Button>
              <Button
                onClick={handlePrint}
                variant="outline"
                className="border-[#EAE2D6] text-[#2D2D2D]/70 hover:bg-[#EAE2D6] cursor-pointer flex-1"
              >
                <Printer size={16} className="mr-2" />
                Print
              </Button>
              <Link href="/appeal">
                <Button
                  variant="outline"
                  className="border-[#EAE2D6] text-[#2D2D2D]/70 hover:bg-[#EAE2D6] cursor-pointer w-full"
                >
                  <Edit size={16} className="mr-2" />
                  Edit information
                </Button>
              </Link>
            </div>

            <Disclaimer
              text="Review the information carefully before printing, signing and submitting."
              variant="warning"
            />

            <div className="mt-3">
              <Disclaimer
                text="Votable generates a formatted draft. It does not submit the appeal on your behalf."
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link href="/appeal">
              <Button
                variant="outline"
                className="border-[#EAE2D6] text-[#2D2D2D]/60 hover:bg-[#EAE2D6] cursor-pointer"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back to form
              </Button>
            </Link>
            <Link href="/confirmation">
              <Button className="bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer">
                Continue to confirmation
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
