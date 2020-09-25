import { Component, OnInit } from '@angular/core';
//import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import{Router} from '@angular/router';
import { AuthService } from '../auth.service';
import {Logindet} from '../logindet';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginUserData = new Logindet('','');

  constructor( private _auth: AuthService,
                private _router: Router,
                )
  {  }
  ngOnInit(): void {
  }

  loginUser() 
  {
    this._auth.loginUser(this.loginUserData)
    .subscribe(
      res => {
        localStorage.setItem('token', res.token)
        alert("Login Succefull");
        this._router.navigate(['/special'])
      },
      err => console.log(err)
    ) 
  }

}
