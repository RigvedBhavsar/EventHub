import { Component, OnInit } from '@angular/core';
//
import{Router} from '@angular/router';
import { Logindet } from '../../logindet';
import {AuthService} from '../../auth.service'; //we have to implement admin auth separately 

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
    loginAdminData = new Logindet('','');
    constructor(
        private _auth:AuthService,
        private _router:Router
    ) { }

    ngOnInit(): void {
    }
    //here we have to implement the logic for adminLogin according to its service and authGuard
    loginAdmin() 
    {
      this._auth.loginUser(this.loginAdminData)
      .subscribe(
        res => {
          localStorage.setItem('token', res.token)
          this._router.navigate(['/dash'])  //if successs then and only it will show dash
        },
        err => console.log(err)
      ) 
    }
}
