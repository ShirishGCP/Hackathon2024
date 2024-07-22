import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Carer } from '../carer.model';
import { Community } from '../my-community/community.model';
import { GP } from '../gp.model';
import { AdmiralNurse } from '../admiral-nurse.model';
import { Patient } from '../patient.model';
import { Annuncement } from '../my-community/annuncement.model';
import { environment } from '../../environment';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  
  private apiUrl = environment.apiUrl; // Replace with your backend API URL
  constructor(private httpClient: HttpClient) { }

  getCarerDetails():Observable<Carer[]> {
    return this.httpClient.get<Carer[]>(`${this.apiUrl}/archtech/get-my-carers`);
  }

  getGPDetails():Observable<GP[]> {
    return this.httpClient.get<GP[]>(`${this.apiUrl}/archtech/get-my-gp`);
  }

  getCommunityDetails():Observable<Community[]> {
    return this.httpClient.get<Community[]>(`${this.apiUrl}/archtech/get-my-communities`);
  }

  getNurseDetails():Observable<AdmiralNurse[]> {
    return this.httpClient.get<AdmiralNurse[]>(`${this.apiUrl}/archtech/get-my-nurse`);
  }

  getPatientDetails():Observable<Patient[]> {
    return this.httpClient.get<Patient[]>(`${this.apiUrl}/fetchCarer`);
  }

  getAnnouncements():Observable<Annuncement[]> {
    return this.httpClient.get<Annuncement[]>(`${this.apiUrl}/rchtech/get-my-announcements/{1}`);
  }
}
