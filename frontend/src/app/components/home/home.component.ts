import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Job } from '../../models/job.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  jobs: Job[] = [];
  currentUser: User | null = null;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit() {
    this.apiService.getJobs().subscribe({
      next: (jobs) => this.jobs = jobs,
      error: (err) => console.error('Failed to fetch jobs', err)
    });
    this.authService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  apply(jobId: number) {
    if (this.currentUser && this.currentUser.id) {
      this.apiService.applyForJob({ id: 0, jobId, userId: this.currentUser.id, status: 'PENDING', appliedDate: new Date().toISOString() }).subscribe({
        next: () => alert('Application submitted!'),
        error: (err) => console.error('Application failed', err)
      });
    } else {
      alert('Please login to apply');
    }
  }
}
