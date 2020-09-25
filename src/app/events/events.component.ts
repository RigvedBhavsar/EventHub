import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

    events = []
    constructor(private _eventService: EventService,
            public router :Router
        ) { }
  
    ngOnInit() 
    {
      this._eventService.getEvents()
        .subscribe(
          res => this.events = res,
          err => console.log(err)
        )
    }

    EnrollEvent()
    {
        this.router.navigate(['/enroll'])
    }
}
