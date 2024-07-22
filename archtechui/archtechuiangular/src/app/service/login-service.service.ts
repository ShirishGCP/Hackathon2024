import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  private loggedInSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  loggedIn$: Observable<boolean> = this.loggedInSubject.asObservable();

  private currentUserSubject: BehaviorSubject<string | undefined> = new BehaviorSubject<string | undefined>(undefined);
  currentUser$: Observable<string | undefined> = this.currentUserSubject.asObservable();
  private currentUser:string | undefined;
  private loggedIn = false;
  private apiUrl = environment.apiUrl;// Replace with your backend API URL

  constructor(private http: HttpClient) { }
  
  login(userData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<any>(`${this.apiUrl}/login`, userData, { headers });
  }

  logout() {
    this.loggedInSubject.next(false);
    this.currentUserSubject.next(undefined);
    // this.loggedIn = false;
    // this.currentUser = undefined;
  }

  // isLoggedIn(): boolean {
  //   return this.loggedIn;
  // }
  isLoggedIn(): Observable<boolean> {
    return this.loggedIn$;
  }

  setCurrentUser(user: string) {
    this.loggedInSubject.next(true);
    this.currentUserSubject.next(user);
    // this.loggedIn = true;
    // this.currentUser = user;
  }

  // getCurrentUser(): string | undefined {
  //   return this.currentUser;
  // }
  getCurrentUser(): Observable<string | undefined> {
    return this.currentUser$;
  }
}
