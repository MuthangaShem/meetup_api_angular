import { Component, OnInit } from '@angular/core';
import { EventsService} from '../../services/events.service'
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

	events: any[];

  constructor( private eventsserive: EventsService ) { 
  	this.eventsserive.getEvents().subscribe(events => {console.log(events);
  		
  	});
  }

  ngOnInit() {
  }

}
