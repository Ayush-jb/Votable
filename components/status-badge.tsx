import { CheckCircle, AlertCircle, XCircle } from "lucide-react";
import type { VoterStatus } from "@/lib/types";

interface StatusBadgeProps {
  status: VoterStatus;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const config = {
    included: {
      icon: CheckCircle,
      label: "SIR Status — Included",
      bg: "bg-[#8B9A6E]/10",
      text: "text-[#8B9A6E]",
      border: "border-[#8B9A6E]/20",
    },
    excluded: {
      icon: AlertCircle,
      label: "SIR Status — Excluded",
      bg: "bg-amber-50",
      text: "text-amber-700",
      border: "border-amber-200",
    },
    not_found: {
      icon: XCircle,
      label: "EPIC Not Recognised",
      bg: "bg-[#EEEEEE]",
      text: "text-[#2D2D2D]/60",
      border: "border-[#EEEEEE]",
    },
  };

  const { icon: Icon, label, bg, text, border } = config[status];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${bg} ${text} ${border}`}
    >
      <Icon size={14} />
      {label}
    </span>
  );
}
