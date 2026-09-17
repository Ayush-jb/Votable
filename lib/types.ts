// Votable — Core TypeScript Types
// All interfaces for the civic-information application

export type VoterStatus = "included" | "excluded" | "not_found";

export interface State {
  code: string;
  name: string;
  sirYear: number;
}

export interface Tribunal {
  tribunalCode: string;
  tribunalName: string;
  district: string;
  presidingOfficer: string;
  address: string;
  stateCode: string;
  isDemo: boolean; // IMPORTANT: marks whether this is illustrative/demo data
}

export interface Voter {
  epicNumber: string;
  fullName: string;
  stateCode: string;
  district: string;
  status: VoterStatus;
  assemblyConstituency?: string;
  partNumber?: string;
  serialNumber?: string;
  tribunalCode?: string;
}

export interface VoterResult {
  status: VoterStatus;
  voter?: Voter;
  tribunal?: Tribunal;
  state?: State;
}

export interface RequiredDocument {
  id: string;
  name: string;
  description: string;
  mandatory: boolean;
}

export interface AppealFormData {
  // Auto-filled from search
  fullName: string;
  epicNumber: string;
  stateCode: string;
  district: string;
  tribunalCode: string;
  tribunalName: string;
  presidingOfficer: string;
  tribunalAddress: string;
  // User-provided
  fatherMotherSpouseName: string;
  village: string;
  postOffice: string;
  policeStation: string;
  fullAddress: string;
  partNumber: string;
  serialNumber: string;
  assemblyConstituency: string;
  reasonForAppeal: string;
}

export interface AppealDeadline {
  date: string; // ISO date string
  displayDate: string; // e.g. "15 March 2026"
  source: string;
  note: string;
}
