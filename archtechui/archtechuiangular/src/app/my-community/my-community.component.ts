import { Component } from '@angular/core';
import { Community } from './community.model';
import { CommunityServiceService } from './community-service.service';
import { Annuncement } from './annuncement.model';

@Component({
  selector: 'app-my-community',
  templateUrl: './my-community.component.html',
  styleUrl: './my-community.component.css'
})
export class MyCommunityComponent {
  communities: Community[] = [];
  selectedCommunity: Community | null = null; // Track selected community
  announcements: Annuncement[] | undefined;

  constructor(private communityService: CommunityServiceService) {

  }

  ngOnInit(): void {
    this.loadCommunities();
  }

  loadCommunities(): void {
    // this.communityService.getCommunities().subscribe(
    //   (communities) => {
    //     this.communities = communities;
    //   },
    //   (error) => {
    //     console.error('Error fetching communities: ', error);
    //   }
    // );

    this.communities = [
      // {
      // 'id': 1, 'name': 'Dem-com India', 'description': 'dummy description',
      // 'location': 'India', 'announcements':
      //   [{ 'id': 1, 'name': 'Announcement India', 'description': 'dummy description', 'location': 'India', 'date': new Date() }]
      // },
      {
        'id' : 1, 'name' : 'UK Community', 'description' : 'Carer Community', 'location' : 'London', 'email':'', 'phone': 8978768987, 'bio':'', 'city':'',
        'announcements':[]
        },
        {
          'id' : 2, 'name' : 'India Community', 'description' : 'Carer Community', 'location' : 'London', 'email':'', 'phone': 8978768987, 'bio':'', 'city':'',
          'announcements':[]
          },
          {
            'id' : 1, 'name' : 'Europe Community', 'description' : 'Carer Community', 'location' : 'London', 'email':'', 'phone': 8978768987, 'bio':'', 'city':'',
            'announcements':[]
            }
            
    
    ]
  }

  onCardClicked(community: Community): void {
    console.log('Clicked community:', community);
    // Add your logic here for what happens when a card is clicked
    this.selectedCommunity = community;
    this.announcements = this.communities.find(com => com.id == community.id)?.announcements;
  }

  clearSelection(): void {
    this.selectedCommunity = null;
  }

}
