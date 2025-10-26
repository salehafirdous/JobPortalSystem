import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Job } from '../models/job.model';
import { Company } from '../models/company.model';
import { Application } from '../models/application.model';
import { Role } from '../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  // Jobs
  getJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs`);
  }

  getJob(id: number): Observable<Job> {
    return this.http.get<Job>(`${this.apiUrl}/jobs/${id}`);
  }

  getJobsByCompany(companyId: number): Observable<Job[]> {
    return this.http.get<Job[]>(`${this.apiUrl}/jobs/company/${companyId}`);
  }

  postJob(job: Job): Observable<Job> {
    return this.http.post<Job>(`${this.apiUrl}/jobs`, job);
  }

  updateJob(id: number, job: Job): Observable<Job> {
    return this.http.put<Job>(`${this.apiUrl}/jobs/${id}`, job);
  }

  deleteJob(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/jobs/${id}`);
  }

  // Companies
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/companies`);
  }

  getCompany(id: number): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/companies/${id}`);
  }

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(`${this.apiUrl}/companies`, company);
  }

  updateCompany(id: number, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/companies/${id}`, company);
  }

  deleteCompany(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/companies/${id}`);
  }

  // Applications
  applyForJob(application: Application): Observable<Application> {
    return this.http.post<Application>(`${this.apiUrl}/applications`, application);
  }

  getApplicationsByUser(userId: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/applications/user/${userId}`);
  }

  getApplicationsByJob(jobId: number): Observable<Application[]> {
    return this.http.get<Application[]>(`${this.apiUrl}/applications/job/${jobId}`);
  }

  deleteApplication(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/applications/${id}`);
  }

  // Roles
  getRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(`${this.apiUrl}/roles`);
  }

  getRoleById(id: number): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/roles/${id}`);
  }

  getRoleByName(name: string): Observable<Role> {
    return this.http.get<Role>(`${this.apiUrl}/roles/name/${name}`);
  }

  addRole(role: Role): Observable<Role> {
    return this.http.post<Role>(`${this.apiUrl}/roles`, role);
  }

  deleteRole(id: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/roles/${id}`);
  }
}
