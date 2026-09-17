// Votable — Mock Data Layer
// Sample records for demo/prototype. Replace with Supabase queries later.

import { State, Tribunal, Voter, RequiredDocument, AppealDeadline } from "./types";

export const MOCK_STATES: State[] = [
  { code: "WB", name: "West Bengal", sirYear: 2026 },
  { code: "BR", name: "Bihar", sirYear: 2026 },
];

export const MOCK_TRIBUNALS: Tribunal[] = [
  {
    tribunalCode: "WB-KOL-001",
    tribunalName: "Kolkata North District Election Office",
    district: "Kolkata",
    presidingOfficer: "Smt. Smita Pandey, IAS",
    address: "Jessop Building, 63, Netaji Subhas Road, Kolkata, West Bengal 700001",
    stateCode: "WB",
    isDemo: false,
  },
  {
    tribunalCode: "BR-PAT-001",
    tribunalName: "Patna District Election Office",
    district: "Patna",
    presidingOfficer: "Shri Kundan Kumar, IAS",
    address: "Patna Collectorate, Hindi Bhawan, Chajju Bagh, Patna, Bihar 800001",
    stateCode: "BR",
    isDemo: false,
  },
];

export const MOCK_VOTERS: Voter[] = [
  // West Bengal (Kolkata)
  {
    epicNumber: "WBDEMO001",
    fullName: "Arjun Sharma",
    stateCode: "WB",
    district: "Kolkata",
    status: "included",
    assemblyConstituency: "Kolkata Dakshin",
    partNumber: "142",
    serialNumber: "567",
    tribunalCode: "WB-KOL-001",
  },
  {
    epicNumber: "WBDEMO002",
    fullName: "Priya Das",
    stateCode: "WB",
    district: "Kolkata",
    status: "excluded",
    assemblyConstituency: "Kolkata Uttar",
    partNumber: "89",
    serialNumber: "234",
    tribunalCode: "WB-KOL-001",
  },
  {
    epicNumber: "WBDEMO003",
    fullName: "Rahul Banerjee",
    stateCode: "WB",
    district: "Kolkata",
    status: "included",
    assemblyConstituency: "Bhowanipore",
    partNumber: "45",
    serialNumber: "112",
    tribunalCode: "WB-KOL-001",
  },
  {
    epicNumber: "WBDEMO004",
    fullName: "Ananya Ghosh",
    stateCode: "WB",
    district: "Kolkata",
    status: "excluded",
    assemblyConstituency: "Jadavpur",
    partNumber: "210",
    serialNumber: "890",
    tribunalCode: "WB-KOL-001",
  },
  {
    epicNumber: "WBDEMO005",
    fullName: "Sourav Mitra",
    stateCode: "WB",
    district: "Kolkata",
    status: "excluded",
    assemblyConstituency: "Ballygunge",
    partNumber: "76",
    serialNumber: "405",
    tribunalCode: "WB-KOL-001",
  },
  
  // Bihar (Patna)
  {
    epicNumber: "BRDEMO001",
    fullName: "Rohit Kumar",
    stateCode: "BR",
    district: "Patna",
    status: "included",
    assemblyConstituency: "Patna Sahib",
    partNumber: "12",
    serialNumber: "56",
    tribunalCode: "BR-PAT-001",
  },
  {
    epicNumber: "BRDEMO002",
    fullName: "Neha Singh",
    stateCode: "BR",
    district: "Patna",
    status: "excluded",
    assemblyConstituency: "Bankipur",
    partNumber: "134",
    serialNumber: "678",
    tribunalCode: "BR-PAT-001",
  },
  {
    epicNumber: "BRDEMO003",
    fullName: "Amit Yadav",
    stateCode: "BR",
    district: "Patna",
    status: "included",
    assemblyConstituency: "Kumhrar",
    partNumber: "55",
    serialNumber: "233",
    tribunalCode: "BR-PAT-001",
  },
  {
    epicNumber: "BRDEMO004",
    fullName: "Pooja Kumari",
    stateCode: "BR",
    district: "Patna",
    status: "excluded",
    assemblyConstituency: "Digha",
    partNumber: "90",
    serialNumber: "445",
    tribunalCode: "BR-PAT-001",
  },
  {
    epicNumber: "BRDEMO005",
    fullName: "Vikram Sharma",
    stateCode: "BR",
    district: "Patna",
    status: "excluded",
    assemblyConstituency: "Patna Sahib",
    partNumber: "23",
    serialNumber: "102",
    tribunalCode: "BR-PAT-001",
  }
];

export const MOCK_REQUIRED_DOCUMENTS: RequiredDocument[] = [
  {
    id: "hearing-notice",
    name: "Hearing Notice Copy",
    description: "Copy of the official hearing notice received, if any.",
    mandatory: false,
  },
  {
    id: "sir-form",
    name: "SIR Form",
    description: "The Special Intensive Revision form related to your application.",
    mandatory: true,
  },
  {
    id: "birth-certificate",
    name: "Birth Certificate",
    description: "Original or attested copy of your birth certificate, if applicable.",
    mandatory: false,
  },
  {
    id: "school-certificate",
    name: "School Certificate / Admit Card / Board Certificate",
    description: "Educational certificate for age and identity verification.",
    mandatory: false,
  },
  {
    id: "pan-aadhaar",
    name: "PAN Card / Aadhaar Card",
    description: "Government-issued identity document for verification.",
    mandatory: true,
  },
  {
    id: "electoral-roll-2002",
    name: "2002 Electoral Roll",
    description: "Copy of the 2002 electoral roll showing your name, if available.",
    mandatory: false,
  },
  {
    id: "electoral-roll-2026",
    name: "2026 Electoral Roll (for progeny)",
    description: "Current electoral roll entry for progeny, if applicable.",
    mandatory: false,
  },
  {
    id: "domicile-certificate",
    name: "Domicile Certificate / Residential Proof",
    description: "Proof of residence such as domicile certificate, utility bill, or similar.",
    mandatory: true,
  },
];

export const MOCK_APPEAL_DEADLINE: AppealDeadline = {
  date: "2026-03-15",
  displayDate: "15 March 2026",
  source: "Official SIR Notice (Illustrative)",
  note: "Check the latest official notice before submitting.",
};
