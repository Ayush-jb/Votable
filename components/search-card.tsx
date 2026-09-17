"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ShieldCheck, Loader2 } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { searchVoter } from "@/lib/data";
import { useAppeal } from "@/lib/appeal-context";
import { motion } from "framer-motion";

export function SearchCard() {
  const router = useRouter();
  const { setVoter, setTribunal, setState } = useAppeal();
  const [epic, setEpic] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!epic.trim()) {
      setError("Please enter your EPIC number.");
      return;
    }
    if (!name.trim()) {
      setError("Please enter your full name.");
      return;
    }

    setLoading(true);
    try {
      const result = await searchVoter(epic, name);
      setVoter(result.voter || null);
      setTribunal(result.tribunal || null);
      setState(result.state || null);
      router.push(`/result?status=${result.status}`);
    } catch {
      setError("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="w-full max-w-md mx-auto"
    >
      <div className="rounded-xl border border-[#EAE2D6] bg-white p-6 sm:p-8 shadow-sm">
        <div className="flex items-center gap-2 mb-6">
          <Search size={18} className="text-[#8B9A6E]" />
          <h2 className="text-lg font-semibold text-[#2D2D2D]">
            Check Electoral Roll Status
          </h2>
        </div>

        <form onSubmit={handleSearch} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="epic" className="text-sm font-medium text-[#2D2D2D]">
              EPIC Number
            </Label>
            <Input
              id="epic"
              type="text"
              placeholder="Enter your EPIC number"
              value={epic}
              onChange={(e) => setEpic(e.target.value)}
              className="border-[#EAE2D6] bg-[#F7F2EB] focus:border-[#8B9A6E] focus:ring-[#8B9A6E]/20 placeholder:text-[#2D2D2D]/30"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-[#2D2D2D]">
              Full Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name as registered"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="border-[#EAE2D6] bg-[#F7F2EB] focus:border-[#8B9A6E] focus:ring-[#8B9A6E]/20 placeholder:text-[#2D2D2D]/30"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 bg-red-50 rounded-lg px-3 py-2">{error}</p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#8B9A6E] hover:bg-[#7A8960] text-white font-medium py-2.5 rounded-lg transition-colors cursor-pointer"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Loader2 size={16} className="animate-spin" />
                Checking...
              </span>
            ) : (
              "Check Status"
            )}
          </Button>
        </form>

        <div className="mt-5 flex items-start gap-2 text-xs text-[#2D2D2D]/50">
          <ShieldCheck size={14} className="mt-0.5 shrink-0 text-[#8B9A6E]/60" />
          <p>
            Your information is used only to match your submitted details with the available SIR
            dataset.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
