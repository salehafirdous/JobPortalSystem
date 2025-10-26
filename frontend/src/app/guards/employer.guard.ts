import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmployerGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    return this.authService.getCurrentUser().pipe(
      map(user => {
        if (user && user.role === 'RECRUITER') return true;
        this.router.navigate(['/home']);
        return false;
      })
    );
  }
}
