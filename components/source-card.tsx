import { ExternalLink } from "lucide-react";

interface SourceCardProps {
  title: string;
  description: string;
  isDemo?: boolean;
}

export function SourceCard({ title, description, isDemo = false }: SourceCardProps) {
  return (
    <div className="flex items-start gap-3 rounded-lg border border-[#EAE2D6] bg-[#F7F2EB] p-3">
      <ExternalLink size={14} className="mt-0.5 shrink-0 text-[#8B9A6E]/60" />
      <div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-medium text-[#2D2D2D]/70">{title}</p>
          {isDemo && (
            <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-amber-700">
              Demo
            </span>
          )}
        </div>
        <p className="mt-0.5 text-xs text-[#2D2D2D]/50">{description}</p>
      </div>
    </div>
  );
}
