import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { UserDetails } from '../user-details';
import { AuthService } from '../auth.service';
import { Router } from "@angular/router";
  
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
    public signUpdata=[];
    public submitted:boolean=false;

    constructor(
            private _auth: AuthService,
            public fobj:FormBuilder,
            public router :Router
        ){ }
    
    //Validation purpose  
    userform = this.fobj.group(
        {
            fname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
            sname:['',[Validators.required,Validators.pattern(('[a-zA-Z ]*'))]],
            email:['',[Validators.required, Validators.pattern(("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"))]],
            pnum:['',[Validators.required,Validators.pattern('[0-9]{10}')]],
            address:['',Validators.required],
            password:['',[Validators.required,Validators.minLength(6)]]
        }
    );

    //This method will send the data to the server through service -> http ->server 
    signup()
    {
        this .submitted=true;
        this._auth.signupData(this.userform.value)
        .subscribe
        (
            data => console.log("Success", data),
            error => console.error("!error", error) 
            
        )
        alert("Successfully Registerd");
       this.router.navigate(['/login']);
    }
    ngOnInit() 
    { }
        
}
