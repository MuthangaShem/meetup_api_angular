import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/Http';
import {HttpClient} from '@angular/common/http'
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
	private api_key : '2772657f70773380582c7a693039116a';
	private city: 'nairobi';

  constructor(private http:HttpClient) {
  	console.log('services inafanya!!');
  	this.city = 'nairobi';
   }
   getEvents(){
   	return this.http.get("https://api.meetup.com/2/concierge?key=2772657f70773380582c7a693039116a&sign=true&photo-host=public&city=nairobi&only=name,venue.lat,venue.lon,photo_url,description,time,group.urlname").pipe(map(res => res ));
   };
}
