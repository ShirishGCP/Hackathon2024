import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
    providedIn: 'root' // This provides the service at the root level
  })
export class UserService {
  private userDataSource = new BehaviorSubject({email : '', password : ''});
  currentUserData = this.userDataSource.asObservable();
  constructor() { }
  changeData(newUserData: { email: string; password: string; }) {
    this.userDataSource.next(newUserData)
  }
}