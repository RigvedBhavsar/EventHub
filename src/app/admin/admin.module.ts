import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

//Thir Party Module
import {MatButtonModule} from '@angular/material/button';          
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [AdminLoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    MatButtonModule,
    MatIconModule
  ],
})
export class AdminModule { }
