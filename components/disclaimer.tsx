import { Info } from "lucide-react";

interface DisclaimerProps {
  text: string;
  variant?: "default" | "warning" | "subtle";
}

export function Disclaimer({ text, variant = "default" }: DisclaimerProps) {
  const styles = {
    default: "border-[#EAE2D6] bg-[#F7F2EB] text-[#2D2D2D]/60",
    warning: "border-[#EAE2D6] bg-[#EAE2D6]/50 text-[#2D2D2D]/70",
    subtle: "border-transparent bg-transparent text-[#2D2D2D]/40",
  };

  return (
    <div className={`flex items-start gap-2.5 rounded-lg border px-4 py-3 text-xs ${styles[variant]}`}>
      <Info size={14} className="mt-0.5 shrink-0 opacity-60" />
      <p className="leading-relaxed">{text}</p>
    </div>
  );
}
