import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiBaseUrl}/users`;
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<User | null>(null);

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('token');
    if (token) {
      this.loggedIn.next(true);
      this.getUser().subscribe(user => this.currentUser.next(user));
    }
  }

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/login`, { email, password }).pipe(
      tap(user => {
        localStorage.setItem('token', user.id.toString()); // Assuming backend returns JWT or ID as token
        this.loggedIn.next(true);
        this.currentUser.next(user);
      })
    );
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(`${this.apiUrl}/register`, user);
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn.next(false);
    this.currentUser.next(null);
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  getCurrentUser(): Observable<User | null> {
    return this.currentUser.asObservable();
  }

  getUser(): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/profile`); // Adjust if profile endpoint exists
  }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}`);
  }
}
