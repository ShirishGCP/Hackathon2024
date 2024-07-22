import { Injectable } from '@angular/core';
import { User } from './search-nearby.component';

const nearbyUsers: User[] = [{
  'firstName':'Sachin',
  'lastName': 'Nanaware',
  'location': {
    accuracy: 0,
    latitude: 18.72,
    longitude: 73.33,
    altitude: null,
    heading: null,
    altitudeAccuracy: null,
    speed: null
  },
  userType: 'Carer',
  contact: '8275208827',
  address: 'Pune'
},
{
  'firstName':'Sandesh',
  'lastName': 'B',
  'location': {
    accuracy: 0,
    latitude: 19.0760,
    longitude: 72.8777,
    altitude: null,
    heading: null,
    altitudeAccuracy: null,
    speed: null
  },
  userType: 'GP',
  contact: '8632XXXXXX',
  address: 'Mumbai'
},
{
  'firstName':'Khushboo',
  'lastName': 'Chhabra',
  'location': {
    accuracy: 0,
    latitude: 20.72,
    longitude: 69.33,
    altitude: null,
    heading: null,
    altitudeAccuracy: null,
    speed: null
  },
  userType: 'Carer',
  contact: '8275208827',
  address: 'Pune'
},
{
  'firstName':'Prachi',
  'lastName': 'J',
  'location': {
    accuracy: 0,
    latitude: 16.0760,
    longitude: 82.8777,
    altitude: null,
    heading: null,
    altitudeAccuracy: null,
    speed: null
  },
  userType: 'GP',
  contact: '8632XXXXXX',
  address: 'Mumbai'
},
{
  'firstName':'Dementia-carers-Pune',
  'lastName': 'Pune',
  'location': {
    accuracy: 0,
    latitude: 16.0760,
    longitude: 82.8777,
    altitude: null,
    heading: null,
    altitudeAccuracy: null,
    speed: null
  },
  userType: 'Communinty',
  contact: '8632XXXXXX',
  address: 'Pune'
}];

@Injectable({
  providedIn: 'root'
})
export class SearchNearbyService {


  constructor() { }

  
  searchNearbyUsers(location: GeolocationCoordinates, userType: string){
    return nearbyUsers;
   // return nearbyUsers.filter(user=> user.userType === userType);
  }
}
