import { Lock } from "lucide-react";

interface AutoFilledFieldProps {
  label: string;
  value: string;
}

export function AutoFilledField({ label, value }: AutoFilledFieldProps) {
  return (
    <div className="space-y-1.5">
      <label className="flex items-center gap-1.5 text-sm font-medium text-[#2D2D2D]/60">
        {label}
        <Lock size={12} className="text-[#8B9A6E]/50" />
      </label>
      <div className="rounded-lg border border-[#EAE2D6] bg-[#F7F2EB] px-3 py-2.5 text-sm text-[#2D2D2D]/70">
        {value || "—"}
      </div>
    </div>
  );
}
