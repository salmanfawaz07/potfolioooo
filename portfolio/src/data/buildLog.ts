export interface BuildLogEntry {
  id: string;
  date: string;
  title: string;
  description: string;
}

/**
 * Manually maintained. Only add verified milestones.
 * Leave empty to show the "UPDATING" state.
 */
export const buildLog: BuildLogEntry[] = [];
