import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  user: User | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.isLoggedIn().subscribe(loggedIn => this.isLoggedIn = loggedIn);
    this.authService.getCurrentUser().subscribe(user => this.user = user);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
