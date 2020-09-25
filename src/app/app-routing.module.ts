import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AppComponent } from './app.component';
import { EventsComponent } from './events/events.component';
import { AuthGuard } from './auth.guard';
import { SpecialEventsComponent } from './special-events/special-events.component';
import { AdminModule } from './admin/admin.module';
import { HeaderComponent } from './header/header.component';
import{ WildcardComponent} from './wildcard/wildcard.component';
import { EnrollEventComponent } from './enroll-event/enroll-event.component';

const routes: Routes = [
    {path:'header', component:HeaderComponent},
    {path: 'login' , component:LoginComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'events', component:EventsComponent},
    {path: 'enroll', component:EnrollEventComponent},
    {path:'special', canActivate:[AuthGuard],component:SpecialEventsComponent},
    {path: 'admin' , loadChildren :() => import('./admin/admin.module').then(m=>AdminModule)},
    {path:'', redirectTo:'/events', pathMatch:'full'},
    {path:'**', component:WildcardComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
