import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth.service';
import { Application } from '../../models/application.model';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit {
  applications: Application[] = [];
  currentUser: User | null = null;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
      if (user && user.id) {
        this.apiService.getApplicationsByUser(user.id).subscribe({
          next: (apps) => this.applications = apps,
          error: (err) => console.error('Failed to fetch applications', err)
        });
      }
    });
  }

  deleteApplication(id: number) {
    if (confirm('Are you sure you want to delete this application?')) {
      this.apiService.deleteApplication(id).subscribe({
        next: () => {
          this.applications = this.applications.filter(app => app.id !== id);
          alert('Application deleted!');
        },
        error: (err) => console.error('Failed to delete application', err)
      });
    }
  }
}
