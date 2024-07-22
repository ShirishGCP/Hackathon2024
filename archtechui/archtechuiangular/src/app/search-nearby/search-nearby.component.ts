import { Component } from '@angular/core';
import { SearchNearbyService } from './search-nearby.service';

export interface User {
  firstName: string,
  lastName: string,
  address: string,
  location: GeolocationCoordinates
  userType: string,
  contact: string
}

@Component({
  selector: 'app-search-nearby',
  templateUrl: './search-nearby.component.html',
  styleUrl: './search-nearby.component.css'
})
export class SearchNearbyComponent {

  location: GeolocationCoordinates = {} as GeolocationCoordinates;
  selectedUserType: string='Carer';
  userTypes: string[] = ['Admiral Nurse', 'Carer', 'GP', 'Dementia Patient', 'Communities']
  nearbyUsers: User[] = [];
  searchNearbyService: SearchNearbyService;
  center: google.maps.LatLngLiteral = {lat: 18.5106432, lng: 73.8066432};
  zoom = 6;
  markers: any[] = [{
    position: {lat: 18.5106432, lng: 73.8066432},
    title: 'Myself'
  }];
  addMarker(nearbyUsers: User[]) {
    nearbyUsers.forEach(user=> {
      this.markers.push( {
        position: { 'lat': user.location.latitude, lng: user.location.longitude },
        title: user.firstName
      });
    });
    
  }
  constructor(searchNearbyService: SearchNearbyService){
    this.searchNearbyService = searchNearbyService;
    
  }

  searchNearby(){
    this.getCurrentLocation();
  }

  getCurrentLocation(){
    navigator.geolocation.getCurrentPosition(success=>{
      this.location =<GeolocationCoordinates> success.coords;
      console.log(`Latitude:${this.location.latitude}, Longitude:${this.location.longitude}`);
      this.nearbyUsers =this.searchNearbyService.searchNearbyUsers(this.location, this.selectedUserType);
      this.center = { 'lat': this.location.latitude, lng: this.location.longitude }
      this.addMarker(this.nearbyUsers);
    }, error=> {
      console.log('location not allowed.')
    }, undefined);
    
    
    return location;
  }
}
