import { Company } from './company.model';

// export interface Job {
//   id?: number;
//   title: string;
//   description?: string;
//   location?: string;
//   salary?: number;
//   company?: Company;
// }
export interface Job {
  id: number;
  title: string;
  description: string;
  companyId: number;
  location: string;
  postedDate: string;
}
