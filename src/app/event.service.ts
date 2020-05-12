import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EventService {

      private eventurl = "http://localhost:5000/api/events"
      private seventurl = "http://localhost:5000/api/special"


  constructor(private http : HttpClient) { }

  getevents(){
    return this.http.get<any>(this.eventurl)
  }
  getsevents(){
    return this.http.get<any>(this.seventurl)
  }
}
