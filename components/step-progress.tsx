"use client";

import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  { id: 1, label: "Status" },
  { id: 2, label: "Appeal information" },
  { id: 3, label: "Your details" },
  { id: 4, label: "Review petition" },
];

interface StepProgressProps {
  currentStep: number;
}

export function StepProgress({ currentStep }: StepProgressProps) {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between">
        {steps.map((step, index) => (
          <div key={step.id} className="flex items-center flex-1 last:flex-none">
            <div className="flex flex-col items-center gap-1.5">
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-colors ${
                  step.id < currentStep
                    ? "bg-[#8B9A6E] text-white"
                    : step.id === currentStep
                    ? "bg-[#8B9A6E] text-white ring-4 ring-[#8B9A6E]/20"
                    : "bg-[#EEEEEE] text-[#2D2D2D]/40"
                }`}
              >
                {step.id < currentStep ? <CheckCircle size={16} /> : step.id}
              </motion.div>
              <span
                className={`text-[10px] sm:text-xs font-medium text-center leading-tight ${
                  step.id <= currentStep ? "text-[#2D2D2D]" : "text-[#2D2D2D]/40"
                }`}
              >
                {step.label}
              </span>
            </div>
            {index < steps.length - 1 && (
              <div
                className={`hidden sm:block mx-2 h-px flex-1 transition-colors ${
                  step.id < currentStep ? "bg-[#8B9A6E]" : "bg-[#EEEEEE]"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
