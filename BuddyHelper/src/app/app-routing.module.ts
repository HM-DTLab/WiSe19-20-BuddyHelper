import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {CalendarComponent} from './calendar/calendar.component';
import { AppointmentContactComponent } from './appointment-contact/appointment-contact.component';
import { ContactsComponent } from './contacts/contacts.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main-screen', component: MainScreenComponent},
  {path: 'admin-screen', component: AdminScreenComponent},
  {path: 'appointments', component: AppointmentComponent},
  {path: 'calendar', component: CalendarComponent},
  {path: 'contacts', component: ContactsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


