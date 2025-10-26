import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Job } from '../../models/job.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.css']
})
export class JobDetailComponent implements OnInit {
  job: Job | undefined;
  currentUser: User | null = null;

  constructor(private route: ActivatedRoute, private apiService: ApiService, private authService: AuthService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.apiService.getJob(id).subscribe({
      next: (job) => this.job = job,
      error: (err) => console.error('Failed to fetch job', err)
    });
    this.authService.getCurrentUser().subscribe(user => this.currentUser = user);
  }

  apply() {
    if (this.job && this.job.id && this.currentUser && this.currentUser.id) {
      this.apiService.applyForJob({ id: 0, jobId: this.job.id, userId: this.currentUser.id, status: 'PENDING', appliedDate: new Date().toISOString() }).subscribe({
        next: () => alert('Application submitted!'),
        error: (err) => console.error('Application failed', err)
      });
    } else {
      alert('Please login to apply');
    }
  }
}
