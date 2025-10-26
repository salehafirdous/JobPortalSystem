import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Job } from '../../models/job.model';

@Component({
  selector: 'app-add-job',
  templateUrl: './add-job.component.html',
  styleUrls: ['./add-job.component.css']
})
export class AddJobComponent {
  jobForm: FormGroup;

  constructor(private fb: FormBuilder, private apiService: ApiService, private authService: AuthService, private router: Router) {
    this.jobForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      location: ['', Validators.required],
      companyId: ['', Validators.required]
    });
  }

  submit() {
    if (this.jobForm.valid) {
      const job: Job = { ...this.jobForm.value, id: 0, postedDate: new Date().toISOString() };
      this.apiService.postJob(job).subscribe({
        next: () => this.router.navigate(['/home']),
        error: (err) => console.error('Failed to create job', err)
      });
    }
  }
}
