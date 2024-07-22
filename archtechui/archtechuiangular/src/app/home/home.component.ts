import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from '../service/home.service';
import { Carer } from '../carer.model';
import { AdmiralNurse } from '../admiral-nurse.model';
import { Community } from '../my-community/community.model';
import { Patient } from '../patient.model';
import { Annuncement } from '../my-community/annuncement.model';
import { GP } from '../gp.model';
import { DetailComponent } from '../detail/detail.component';
import { Subscription } from 'rxjs';
import { LoginServiceService } from '../service/login-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  loggedIn: boolean = false;
  currentUser: string | undefined;
  private loggedInSubscription: Subscription | undefined;
  private currentUserSubscription: Subscription | undefined;
  carerList: Carer[] =[];
  nurseList: AdmiralNurse[] =[];
  communityList: Community[]=[];
  gpList: GP[]=[];
  patient: Patient[]=[];
  announcements: Annuncement[]=[];
  details = [
    { title: 'Carer', items: [{'id' : 1, 'firstName': 'Prachi', 'lastName': 'Jain', 'email':'abc@xyz.com', 'phone': '8976545789', 'experience': 1, 'userId': 1, 'city':'Pune', 'bio': ''}]},
    { title: 'General Physician', items: [{'id' : 2, 'firstName': 'Shirish', 'lastName': 'Umaredkr', 'email':'shirish@xyz.com', 'phone': '9976545789', 'experience': 1, 'userId': 1, 'city':'Pune', 'bio': ''}]},
    { title: 'Admiral Nurses', items: [{'id' : 3, 'firstName': 'Sachin', 'lastName': 'Nanaware', 'email':'sachin@xyz.com', 'phone': '7976545789', 'experience': 1, 'userId': 1, 'city':'Pune', 'bio': ''}]},
    { title: 'Communities', items: [{'id' : 4, 'firstName': 'Dementia UK Community', 'lastName': 'UK Community', 'email':'ukcommunity@xyz.com', 'phone': '6976545789', 'experience': 1, 'userId': 1, 'city':'Pune', 'bio': ''}]},
  ];
  
  constructor(private router: Router, private service: HomeService, private loginService: LoginServiceService) {

  }
  ngOnInit(): void {
    this.loggedInSubscription = this.loginService.isLoggedIn().subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });

    this.currentUserSubscription = this.loginService.getCurrentUser().subscribe(currentUser => {
      this.currentUser = currentUser;
    });

    this.service.getCarerDetails().subscribe(
      response => {
        this.carerList = response;
      },
      error => {
        console.error('Fetch carer list failed');
      });
    this.service.getGPDetails().subscribe(
      response => {
        this.gpList = response;
      },
      error => {
        console.error('Fetch GP list failed');
      });
    this.service.getNurseDetails().subscribe(
      response => {
        this.nurseList = response;
      },
      error => {
        console.error('Fetch nurse list failed');
      });
    this.service.getPatientDetails().subscribe(
      response => {
        this.patient = response;
      },
      error => {
        console.error('Fetch patient list failed');
      });
    this.service.getCommunityDetails().subscribe(
      response => {
        this.communityList = response;
      },
      error => {
        console.error('Fetch community list failed');
      });

    this.service.getAnnouncements().subscribe(
      response => {
        this.announcements = response;
      },
      error => {
        console.error('Fetch announcement list failed');
      });


  }
  navigateToCommunity() {
    this.router.navigate(['/search']);
  }
}
