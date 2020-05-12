import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private event : EventService,private router : Router) { }
  specialEvents=[];

  ngOnInit() {
    this.event.getsevents().subscribe(res=>this.specialEvents=res,
      err=> {
        if(err instanceof HttpErrorResponse){
          if(err.status===401){
            this.router.navigate(['/login'])
          }
        }
      }
    )
  }


}
