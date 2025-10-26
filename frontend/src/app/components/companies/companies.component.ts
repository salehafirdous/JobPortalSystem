import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Company } from '../../models/company.model';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getCompanies().subscribe({
      next: (companies) => this.companies = companies,
      error: (err) => console.error('Failed to fetch companies', err)
    });
  }
}
