export interface User {
  id: number;
  email: string;
  password?: string;
  name: string;
  role: string; // e.g., "RECRUITER", "JOB_SEEKER", "ADMIN"
}
