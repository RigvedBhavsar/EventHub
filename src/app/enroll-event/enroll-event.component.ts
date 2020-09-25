import { Component, OnInit } from '@angular/core';
import { Enrollevent } from '../enrollevent';
import {AuthService} from '../auth.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-enroll-event',
  templateUrl: './enroll-event.component.html',
  styleUrls: ['./enroll-event.component.css']
})
export class EnrollEventComponent implements OnInit {
    EnrollEventData = new Enrollevent('','','','');
 //EnrollEventData =[]; 
 constructor(
    private _auth: AuthService,
    private _router : Router
  ) { }

  EnrollEvent()
  { 
      this._auth.EventEnroll(this.EnrollEventData)
      .subscribe
      (
            data => console.log("Success",data),
            error => console.error("!error",error)
      )
      this._router.navigate(['/']);
  }
  ngOnInit(): void {
  }

}
