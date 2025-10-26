export interface Application {
  id: number;
  jobId: number;
  userId: number;
  status: string; // e.g., 'PENDING', 'ACCEPTED'
  appliedDate: string;
}
