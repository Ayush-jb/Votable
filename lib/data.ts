// Votable — Data Access Layer
// Supabase-ready abstraction. Currently uses mock data.
// TODO: Replace mock implementations with Supabase queries.
// Example: supabase.from("voters").select("*").eq("epic_number", epic).single()

import { VoterResult, State, Tribunal, RequiredDocument, AppealDeadline } from "./types";
import {
  MOCK_VOTERS,
  MOCK_STATES,
  MOCK_TRIBUNALS,
  MOCK_REQUIRED_DOCUMENTS,
  MOCK_APPEAL_DEADLINE,
} from "./mock-data";

/**
 * Search for a voter by EPIC number and name.
 * TODO: Replace with supabase.from("voters").select("*").eq("epic_number", epic).eq("full_name", name).single()
 */
export async function searchVoter(epic: string, name: string): Promise<VoterResult> {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1200));

  const normalizedEpic = epic.trim().toUpperCase();
  const normalizedName = name.trim().toLowerCase();

  const voter = MOCK_VOTERS.find(
    (v) =>
      v.epicNumber.toUpperCase() === normalizedEpic &&
      v.fullName.toLowerCase() === normalizedName
  );

  if (!voter) {
    return { status: "not_found" };
  }

  const state = MOCK_STATES.find((s) => s.code === voter.stateCode);
  const tribunal = voter.tribunalCode
    ? MOCK_TRIBUNALS.find((t) => t.tribunalCode === voter.tribunalCode)
    : undefined;

  return {
    status: voter.status,
    voter,
    tribunal,
    state,
  };
}

/**
 * Get state information by state code.
 * TODO: Replace with supabase.from("states").select("*").eq("code", stateCode).single()
 */
export async function getStateInfo(stateCode: string): Promise<State | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MOCK_STATES.find((s) => s.code === stateCode);
}

/**
 * Get tribunal information by tribunal code.
 * TODO: Replace with supabase.from("tribunals").select("*").eq("tribunal_code", tribunalCode).single()
 */
export async function getTribunal(tribunalCode: string): Promise<Tribunal | undefined> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MOCK_TRIBUNALS.find((t) => t.tribunalCode === tribunalCode);
}

/**
 * Get the list of required documents for an appeal.
 * TODO: Replace with supabase.from("required_documents").select("*").order("sort_order")
 */
export async function getRequiredDocuments(): Promise<RequiredDocument[]> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MOCK_REQUIRED_DOCUMENTS;
}

/**
 * Get the appeal deadline information.
 * TODO: Replace with supabase.from("appeal_deadlines").select("*").order("date", { ascending: true }).limit(1).single()
 */
export async function getAppealDeadline(): Promise<AppealDeadline> {
  await new Promise((resolve) => setTimeout(resolve, 200));
  return MOCK_APPEAL_DEADLINE;
}
