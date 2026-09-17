import { Calendar, ExternalLink } from "lucide-react";
import type { AppealDeadline } from "@/lib/types";

interface DeadlineCardProps {
  deadline: AppealDeadline;
}

export function DeadlineCard({ deadline }: DeadlineCardProps) {
  return (
    <div className="rounded-xl border border-[#EAE2D6] bg-white p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={18} className="text-[#8B9A6E]" />
        <h3 className="text-base font-semibold text-[#2D2D2D]">Appeal Deadline</h3>
      </div>

      <div className="rounded-lg bg-[#F7F2EB] p-4 mb-4">
        <p className="text-2xl font-bold text-[#2D2D2D]">{deadline.displayDate}</p>
        <p className="mt-1 text-sm text-[#2D2D2D]/60">{deadline.note}</p>
      </div>

      <div className="flex items-center gap-1.5 text-xs text-[#2D2D2D]/50">
        <ExternalLink size={12} />
        <span>Source: {deadline.source}</span>
      </div>
    </div>
  );
}
