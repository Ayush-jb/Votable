import { MapPin, FileText } from "lucide-react";
import type { Tribunal } from "@/lib/types";

interface TribunalCardProps {
  tribunal: Tribunal;
}

export function TribunalCard({ tribunal }: TribunalCardProps) {
  return (
    <div className="rounded-xl border border-[#EAE2D6] bg-white p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-2 mb-4">
          <FileText size={18} className="text-[#8B9A6E]" />
          <h3 className="text-base font-semibold text-[#2D2D2D]">
            Nearest / Relevant Tribunal
          </h3>
        </div>
        {tribunal.isDemo && (
          <span className="shrink-0 rounded bg-amber-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-700 border border-amber-200">
            Demo Data
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <InfoRow label="Tribunal Name" value={tribunal.tribunalName} />
          <InfoRow label="Tribunal Code" value={tribunal.tribunalCode} />
          <InfoRow label="District" value={tribunal.district} />
          <InfoRow label="Presiding Officer" value={tribunal.presidingOfficer} />
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-[#F7F2EB] p-3">
          <MapPin size={14} className="mt-0.5 shrink-0 text-[#8B9A6E]" />
          <p className="text-sm text-[#2D2D2D]/80">{tribunal.address}</p>
        </div>
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-medium uppercase tracking-wider text-[#2D2D2D]/40">
        {label}
      </p>
      <p className="mt-0.5 text-sm font-medium text-[#2D2D2D]">{value}</p>
    </div>
  );
}
