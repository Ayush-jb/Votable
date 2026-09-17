"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { Voter, Tribunal, State, AppealFormData, AppealDeadline, RequiredDocument } from "./types";

interface AppealContextType {
  // Search result data
  voter: Voter | null;
  tribunal: Tribunal | null;
  state: State | null;
  deadline: AppealDeadline | null;
  documents: RequiredDocument[];
  checkedDocuments: string[];
  
  // Form data
  appealFormData: AppealFormData | null;
  
  // Actions
  setVoter: (voter: Voter | null) => void;
  setTribunal: (tribunal: Tribunal | null) => void;
  setState: (state: State | null) => void;
  setDeadline: (deadline: AppealDeadline | null) => void;
  setDocuments: (documents: RequiredDocument[]) => void;
  setCheckedDocuments: (docs: string[]) => void;
  toggleDocument: (docId: string) => void;
  setAppealFormData: (data: AppealFormData | null) => void;
  resetAll: () => void;
}

const AppealContext = createContext<AppealContextType | undefined>(undefined);

export function AppealProvider({ children }: { children: ReactNode }) {
  const [voter, setVoter] = useState<Voter | null>(null);
  const [tribunal, setTribunal] = useState<Tribunal | null>(null);
  const [state, setStateVal] = useState<State | null>(null);
  const [deadline, setDeadline] = useState<AppealDeadline | null>(null);
  const [documents, setDocuments] = useState<RequiredDocument[]>([]);
  const [checkedDocuments, setCheckedDocuments] = useState<string[]>([]);
  const [appealFormData, setAppealFormData] = useState<AppealFormData | null>(null);

  const toggleDocument = (docId: string) => {
    setCheckedDocuments((prev) =>
      prev.includes(docId) ? prev.filter((id) => id !== docId) : [...prev, docId]
    );
  };

  const resetAll = () => {
    setVoter(null);
    setTribunal(null);
    setStateVal(null);
    setDeadline(null);
    setDocuments([]);
    setCheckedDocuments([]);
    setAppealFormData(null);
  };

  return (
    <AppealContext.Provider
      value={{
        voter,
        tribunal,
        state,
        deadline,
        documents,
        checkedDocuments,
        appealFormData,
        setVoter,
        setTribunal,
        setState: setStateVal,
        setDeadline,
        setDocuments,
        setCheckedDocuments,
        toggleDocument,
        setAppealFormData,
        resetAll,
      }}
    >
      {children}
    </AppealContext.Provider>
  );
}

export function useAppeal() {
  const context = useContext(AppealContext);
  if (context === undefined) {
    throw new Error("useAppeal must be used within an AppealProvider");
  }
  return context;
}
