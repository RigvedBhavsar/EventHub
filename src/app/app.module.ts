import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Third Party Imports 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';   
import {MatButtonModule} from '@angular/material/button';          
import {MatIconModule} from '@angular/material/icon';
import {AlertModule} from 'ngx-bootstrap/alert';
import { HttpClientModule , HTTP_INTERCEPTORS } from '@angular/common/http';

//form Control
import {FormsModule} from '@angular/forms';
import{ReactiveFormsModule} from '@angular/forms';

//Service
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { EventService } from './event.service';
import { TokenInterceptorService } from './token-interceptor.service';

//Component Imports 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';            

import { EventsComponent } from './events/events.component';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { HeaderComponent } from './header/header.component';
import { WildcardComponent } from './wildcard/wildcard.component';
import { EnrollEventComponent } from './enroll-event/enroll-event.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    EventsComponent,
    SpecialEventsComponent,
    HeaderComponent,
    WildcardComponent,
    EnrollEventComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [AuthService, AuthGuard, EventService,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
