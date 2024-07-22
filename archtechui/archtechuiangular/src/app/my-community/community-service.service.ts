import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Community } from './community.model';

@Injectable({
  providedIn: 'root'
})
export class CommunityServiceService {
  private apiUrl = 'http://your-backend-api-url'; // Replace with your backend API URL


  constructor(private httpClient : HttpClient) { }

  getCommunities(): Observable<Community[]> {
    return this.httpClient.get<Community[]>(`${this.apiUrl}/login`);
  }
}
