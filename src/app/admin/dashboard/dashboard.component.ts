import { Component, OnInit } from '@angular/core';
//
import {AuthService} from '../../auth.service';
import {EventService} from '../../event.service';
import { Router} from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
//here we are using auth service only for logout purpose
  constructor(
                public _authService : AuthService,
  ) { }

  ngOnInit(): void {
  }

}
