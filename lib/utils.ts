export { cn } from "cn";

/**
 * Mask an EPIC number for privacy display.
 * E.g., "WBDEMO002" → "WBDE••••2"
 */
export function maskEpic(epic: string): string {
  if (epic.length <= 4) return epic;
  const visible = 4;
  const lastChar = epic[epic.length - 1];
  return epic.slice(0, visible) + "••••" + lastChar;
}

/**
 * Format a date string for display.
 */
export function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
