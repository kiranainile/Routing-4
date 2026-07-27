import { Injectable } from '@angular/core';
import { Ifairs } from '../models/fair';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FairService {

  
  fairsArr: Array<Ifairs> = [
    {
      fairId: '62f63b4caa0bf10009d0d86a',
      fairName: 'ISS Washington DC Fair',
      startDate: 1675922400,
      endDate: 1676181600,
      timezoneId: 'Eastern Standard Time',
      location: {
        addressOne: 'Grand Hyatt Washington',
        addressTwo: '1000 H Street NW',
        city: 'Washington D.C.',
        state: 'Washington D.C.',
        country: 'United States',
        zip: '20001'
      },
      numberOfUsersRegistered: 0,
      numberOfSchoolsRegistered: 39,
      isCandidateRegistered: false,
      bannerUrl: 'https://images.unsplash.com/photo-1465447142348-e9952c393450',
      showRegisteredUsersToCandidate: false,
      showRegisteredUsersToSchools: false,
      showRegisteredSchoolsToCandidate: true,
      showRegisteredSchoolsToSchools: false,
      fairStatus: 'published',
      fairStartTime: '9:00 AM',
      fairEndTime: '1:00 PM',
      type: 'Virtual',
      candidateDescription: 'Candidate Description',
      schoolDescription: 'School Description'
    },
    {
  fairId: '63ab1234cd5678ef90123456',
  fairName: 'London International Education Fair',
  startDate: 1685625600,
  endDate: 1685712000,
  timezoneId: 'Greenwich Mean Time',
  location: {
    addressOne: 'Olympia London',
    addressTwo: 'Hammersmith Road',
    city: 'London',
    state: 'England',
    country: 'United Kingdom',
    zip: 'W14 8UX'
  },
  numberOfUsersRegistered: 120,
  numberOfSchoolsRegistered: 45,
  isCandidateRegistered: true,
  bannerUrl: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  showRegisteredUsersToCandidate: true,
  showRegisteredUsersToSchools: true,
  showRegisteredSchoolsToCandidate: true,
  showRegisteredSchoolsToSchools: true,
  fairStatus: 'published',
  fairStartTime: '10:00 AM',
  fairEndTime: '4:00 PM',
  type: 'Offline',
  candidateDescription: 'Meet top universities in London.',
  schoolDescription: 'Connect with talented students.'
},
{
  fairId: '63ab1234cd5678ef90123457',
  fairName: 'Dubai Career Expo',
  startDate: 1688304000,
  endDate: 1688390400,
  timezoneId: 'Gulf Standard Time',
  location: {
    addressOne: 'Dubai World Trade Centre',
    addressTwo: 'Sheikh Zayed Road',
    city: 'Dubai',
    state: 'Dubai',
    country: 'UAE',
    zip: '00000'
  },
  numberOfUsersRegistered: 250,
  numberOfSchoolsRegistered: 60,
  isCandidateRegistered: false,
  bannerUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
  showRegisteredUsersToCandidate: false,
  showRegisteredUsersToSchools: true,
  showRegisteredSchoolsToCandidate: true,
  showRegisteredSchoolsToSchools: false,
  fairStatus: 'upcoming',
  fairStartTime: '9:00 AM',
  fairEndTime: '5:00 PM',
  type: 'Hybrid',
  candidateDescription: 'Explore career opportunities in UAE.',
  schoolDescription: 'Recruit skilled graduates.'
},
{
  fairId: '63ab1234cd5678ef90123458',
  fairName: 'Singapore Global Education Fair',
  startDate: 1690896000,
  endDate: 1690982400,
  timezoneId: 'Singapore Standard Time',
  location: {
    addressOne: 'Marina Bay Sands',
    addressTwo: 'Bayfront Avenue',
    city: 'Singapore',
    state: 'Singapore',
    country: 'Singapore',
    zip: '018956'
  },
  numberOfUsersRegistered: 310,
  numberOfSchoolsRegistered: 70,
  isCandidateRegistered: true,
  bannerUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd',
  showRegisteredUsersToCandidate: true,
  showRegisteredUsersToSchools: true,
  showRegisteredSchoolsToCandidate: false,
  showRegisteredSchoolsToSchools: true,
  fairStatus: 'completed',
  fairStartTime: '11:00 AM',
  fairEndTime: '6:00 PM',
  type: 'Offline',
  candidateDescription: 'Meet universities from across Asia.',
  schoolDescription: 'Admission and scholarship opportunities.'
}
  ];

  constructor() { }


fectchFairs():Observable<Ifairs[]>{
  return of (this.fairsArr)
}

fetchFairById(id:string):Observable<Ifairs>{
  let fairObj=this.fairsArr.find(f=>f.fairId===id)!
  return of(fairObj)
}



}
