"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppeal } from "@/lib/appeal-context";
import { StepProgress } from "@/components/step-progress";
import { AutoFilledField } from "@/components/auto-filled-field";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Disclaimer } from "@/components/disclaimer";
import { ArrowRight, ArrowLeft, Info } from "lucide-react";
import { motion } from "framer-motion";
import type { AppealFormData } from "@/lib/types";
import Link from "next/link";

export default function AppealPage() {
  const router = useRouter();
  const { voter, tribunal, state, setAppealFormData } = useAppeal();

  const [formData, setFormData] = useState({
    fatherMotherSpouseName: "",
    village: "",
    postOffice: "",
    policeStation: "",
    fullAddress: "",
    partNumber: voter?.partNumber || "",
    serialNumber: voter?.serialNumber || "",
    assemblyConstituency: voter?.assemblyConstituency || "",
    reasonForAppeal: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

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

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fatherMotherSpouseName.trim())
      newErrors.fatherMotherSpouseName = "This field is required.";
    if (!formData.village.trim()) newErrors.village = "This field is required.";
    if (!formData.postOffice.trim()) newErrors.postOffice = "This field is required.";
    if (!formData.policeStation.trim()) newErrors.policeStation = "This field is required.";
    if (!formData.fullAddress.trim()) newErrors.fullAddress = "This field is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const appealData: AppealFormData = {
      fullName: voter.fullName,
      epicNumber: voter.epicNumber,
      stateCode: voter.stateCode,
      district: voter.district,
      tribunalCode: tribunal.tribunalCode,
      tribunalName: tribunal.tribunalName,
      presidingOfficer: tribunal.presidingOfficer,
      tribunalAddress: tribunal.address,
      ...formData,
    };

    setAppealFormData(appealData);
    router.push("/petition");
  };

  return (
    <div className="bg-[#F7F2EB] min-h-screen">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Progress */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <StepProgress currentStep={3} />
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6"
        >
          <h1 className="text-2xl font-bold text-[#2D2D2D] sm:text-3xl">
            Prepare your appeal
          </h1>
          <p className="mt-2 text-sm text-[#2D2D2D]/60">
            We&apos;ve filled in the information available from your search. Please complete the
            remaining details.
          </p>
        </motion.div>

        {/* Info banner */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex items-start gap-2.5 rounded-lg border border-[#8B9A6E]/20 bg-[#8B9A6E]/5 px-4 py-3">
            <Info size={14} className="mt-0.5 shrink-0 text-[#8B9A6E]" />
            <p className="text-xs text-[#2D2D2D]/60 leading-relaxed">
              Automatically retrieved information is shown as read-only. Review everything before
              generating your petition.
            </p>
          </div>
        </motion.div>

        <form onSubmit={handleSubmit}>
          {/* Section 1: Auto-filled */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl border border-[#EAE2D6] bg-white p-6 mb-6"
          >
            <h2 className="text-base font-semibold text-[#2D2D2D] mb-4">
              Retrieved information
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <AutoFilledField label="Full Name" value={voter.fullName} />
              <AutoFilledField label="EPIC Number" value={voter.epicNumber} />
              <AutoFilledField label="State" value={state?.name || voter.stateCode} />
              <AutoFilledField label="District" value={voter.district} />
              <AutoFilledField label="Tribunal" value={tribunal.tribunalName} />
              <AutoFilledField label="Tribunal Code" value={tribunal.tribunalCode} />
              <AutoFilledField label="Presiding Officer" value={tribunal.presidingOfficer} />
              <AutoFilledField label="Tribunal Address" value={tribunal.address} />
            </div>
          </motion.div>

          {/* Section 2: User input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="rounded-xl border border-[#EAE2D6] bg-white p-6 mb-6"
          >
            <h2 className="text-base font-semibold text-[#2D2D2D] mb-4">
              Additional details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                label="Father's / Mother's / Spouse's Name"
                value={formData.fatherMotherSpouseName}
                onChange={(v) => handleChange("fatherMotherSpouseName", v)}
                error={errors.fatherMotherSpouseName}
                required
                colSpan
              />
              <FormField
                label="Village / Town"
                value={formData.village}
                onChange={(v) => handleChange("village", v)}
                error={errors.village}
                required
              />
              <FormField
                label="Post Office"
                value={formData.postOffice}
                onChange={(v) => handleChange("postOffice", v)}
                error={errors.postOffice}
                required
              />
              <FormField
                label="Police Station"
                value={formData.policeStation}
                onChange={(v) => handleChange("policeStation", v)}
                error={errors.policeStation}
                required
              />
              <FormField
                label="Part Number"
                value={formData.partNumber}
                onChange={(v) => handleChange("partNumber", v)}
              />
              <FormField
                label="Serial Number"
                value={formData.serialNumber}
                onChange={(v) => handleChange("serialNumber", v)}
              />
              <FormField
                label="Assembly Constituency"
                value={formData.assemblyConstituency}
                onChange={(v) => handleChange("assemblyConstituency", v)}
                colSpan
              />
              <FormField
                label="Full Residential Address"
                value={formData.fullAddress}
                onChange={(v) => handleChange("fullAddress", v)}
                error={errors.fullAddress}
                required
                colSpan
              />
              <FormField
                label="Reason for Appeal"
                value={formData.reasonForAppeal}
                onChange={(v) => handleChange("reasonForAppeal", v)}
                colSpan
                placeholder="Briefly explain why you believe the exclusion is incorrect..."
              />
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <Link href="/appeal-info">
              <Button
                type="button"
                variant="outline"
                className="border-[#EAE2D6] text-[#2D2D2D]/60 hover:bg-[#EAE2D6] cursor-pointer"
              >
                <ArrowLeft size={16} className="mr-2" />
                Back
              </Button>
            </Link>
            <Button
              type="submit"
              className="bg-[#8B9A6E] hover:bg-[#7A8960] text-white cursor-pointer"
            >
              Generate appeal preview
              <ArrowRight size={16} className="ml-2" />
            </Button>
          </motion.div>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label,
  value,
  onChange,
  error,
  required,
  colSpan,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  required?: boolean;
  colSpan?: boolean;
  placeholder?: string;
}) {
  return (
    <div className={colSpan ? "sm:col-span-2" : ""}>
      <Label className="text-sm font-medium text-[#2D2D2D]">
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </Label>
      <Input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder || `Enter ${label.toLowerCase()}`}
        className={`mt-1.5 border-[#EAE2D6] bg-[#F7F2EB] focus:border-[#8B9A6E] focus:ring-[#8B9A6E]/20 placeholder:text-[#2D2D2D]/30 ${
          error ? "border-red-300 bg-red-50/50" : ""
        }`}
      />
      {error && <p className="mt-1 text-xs text-red-500">{error}</p>}
    </div>
  );
}
