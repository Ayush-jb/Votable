"use client";

import { forwardRef, useState, useEffect } from "react";
import type { AppealFormData } from "@/lib/types";

interface PetitionPreviewProps {
  data: AppealFormData;
  date?: string;
}

export const PetitionPreview = forwardRef<HTMLDivElement, PetitionPreviewProps>(
  function PetitionPreview({ data, date }, ref) {
    const [today, setToday] = useState("");

    useEffect(() => {
      setToday(date || new Date().toLocaleDateString("en-GB"));
    }, [date]);

    // Helper to render text or underline if empty
    const renderField = (value: string | undefined | null, blankLength: number = 20) => {
      if (value && value.trim().length > 0) {
        return <span className="font-semibold underline underline-offset-4">{value}</span>;
      }
      return <span>{"_".repeat(blankLength)}</span>;
    };

    return (
      <div
        ref={ref}
        className="bg-white border border-[#EAE2D6] rounded-xl p-8 sm:p-12 shadow-sm max-w-3xl mx-auto text-[15px] leading-relaxed print:p-0 print:border-none print:shadow-none print:max-w-[190mm] print:mx-auto print:text-[14px] print:leading-snug"
        style={{ fontFamily: "'Times New Roman', Times, serif", color: "#000" }}
      >
        <div className="mb-6">
          <p>TO</p>
          <p>THE JUDGE / APPELLATE AUTHORITY</p>
          <p>{renderField(data.tribunalName, 14)}</p>
        </div>

        <div className="flex justify-end mb-8">
          <p>Date: {today}</p>
        </div>

        <div className="mb-6">
          <p className="text-justify">
            SUB: Appeal against the wrongful deletion of my name from the Final Electoral Roll (SIR-2026) under Section 24a RP Act, 1950.
          </p>
        </div>

        <div className="mb-4">
          <p>Respected Sir/Madam,</p>
        </div>

        <div className="space-y-4 text-justify">
          <p style={{ textIndent: "2rem" }}>
            I am {renderField(data.fullName, 30)}, S/o, D/o, W/o {renderField(data.fatherMotherSpouseName, 27)}, residing at 
            Vill: {renderField(data.village, 18)}, P.O.: {renderField(data.postOffice, 18)}, P.S.: {renderField(data.policeStation, 18)}, Dist: {renderField(data.district, 13)}. 
            appealing against the arbitrary deletion of my name from the Final Electoral Roll published on 
            23.03.2026/27.03.2026. The details are given below:
          </p>

          <p>
            1) EPIC No: {renderField(data.epicNumber, 18)} 2) Part No: {renderField(data.partNumber, 7)} 3) Sl. No: {renderField(data.serialNumber, 8)} 4) AC Name {renderField(data.assemblyConstituency, 16)}
          </p>

          <p style={{ textIndent: "2rem" }}>
            I would like to state that I am an ordinary resident of the above-mentioned address. I am not 
            permanently shifted person or a deceased. I have proper documents, yet my name has been deleted due to gross 
            clerical error or in otherwise.
          </p>

          <p style={{ textIndent: "2rem" }}>
            I have attached photocopies of my Aadhaar, EPIC, PAN Card, Birth Certificate, Admit Card, School 
            Certificate, etc.
          </p>

          <p style={{ textIndent: "2rem" }}>
            Therefore, I earnestly request you to kindly review my application and restore my name in the Final 
            Electoral Roll-2026 at the earliest and protect my democratic rights under the Constitution of India.
          </p>
        </div>

        <div className="flex justify-end mt-16 mb-16 print:mt-12 print:mb-8">
          <div className="text-center">
            <p className="mb-10 text-right">Yours faithfully,</p>
            <p>(Signature of the Applicant)</p>
          </div>
        </div>

        <div>
          <p className="mb-2">Enclosures:</p>
          <div className="space-y-0.5">
            <p>1) Hearing Notice Copy</p>
            <p>2) SIR Form</p>
            <p>3) Birth Certificate (If any)</p>
            <p>4) School Certificate / Admit Card / MP / Board Certificate</p>
            <p>5) PAN / Aadhaar Card</p>
            <p>6) 2002 Electoral Roll (Self/Progeny)</p>
            <p>7) 2026 Electoral Roll for Progeny (If any)</p>
            <p>8) Domicile Certificate from the competent authority or any other residential proof.</p>
          </div>
        </div>
      </div>
    );
  }
);
