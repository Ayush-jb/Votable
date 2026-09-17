"use client";

import { ClipboardCheck } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import type { RequiredDocument } from "@/lib/types";
import { useAppeal } from "@/lib/appeal-context";
import { motion } from "framer-motion";

interface DocumentChecklistProps {
  documents: RequiredDocument[];
}

export function DocumentChecklist({ documents }: DocumentChecklistProps) {
  const { checkedDocuments, toggleDocument } = useAppeal();

  return (
    <div className="rounded-xl border border-[#EAE2D6] bg-white p-6">
      <div className="flex items-center gap-2 mb-4">
        <ClipboardCheck size={18} className="text-[#8B9A6E]" />
        <h3 className="text-base font-semibold text-[#2D2D2D]">
          Documents You May Need
        </h3>
      </div>

      <div className="space-y-2">
        {documents.map((doc, index) => (
          <motion.div
            key={doc.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.05 }}
            className="flex items-start gap-3 rounded-lg border border-[#EEEEEE] p-3 hover:border-[#EAE2D6] transition-colors"
          >
            <Checkbox
              id={doc.id}
              checked={checkedDocuments.includes(doc.id)}
              onCheckedChange={() => toggleDocument(doc.id)}
              className="mt-0.5 border-[#EAE2D6] data-[state=checked]:bg-[#8B9A6E] data-[state=checked]:border-[#8B9A6E]"
            />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <label
                  htmlFor={doc.id}
                  className={`text-sm font-medium cursor-pointer ${
                    checkedDocuments.includes(doc.id)
                      ? "text-[#8B9A6E] line-through opacity-60"
                      : "text-[#2D2D2D]"
                  }`}
                >
                  {doc.name}
                </label>
                <span
                  className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
                    doc.mandatory
                      ? "bg-[#8B9A6E]/10 text-[#8B9A6E]"
                      : "bg-[#EEEEEE] text-[#2D2D2D]/40"
                  }`}
                >
                  {doc.mandatory ? "Required" : "Optional"}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-[#2D2D2D]/50">{doc.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
