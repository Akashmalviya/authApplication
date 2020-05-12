import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private events : EventService) { }

  eventArry=[];


  ngOnInit() {this.events.getevents().subscribe(res=>this.eventArry=res,err=>console.log(err)
    )
  }

}
