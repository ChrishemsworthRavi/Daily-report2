export interface Task {
  id: string;
  title: string;
  description: string;
  date: string; // or Date if you want it typed as Date object
  // Include other fields if you need them (e.g., completedAt, category, etc.)
}