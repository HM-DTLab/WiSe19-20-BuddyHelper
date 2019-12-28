import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { AppointmentComponent } from './appointment/appointment.component';
import {CalendarComponent} from './calendar/calendar.component';



const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'main-screen', component: MainScreenComponent},
  {path: 'admin-screen', component: AdminScreenComponent},
  {path: 'appointments', component: AppointmentComponent},
  {path: 'calendar', component: CalendarComponent}
// Wenn der Component für die Main Seite verfügbar ist
// 'main' und MainComponent mit dem Component Name ändern
// auch in login.component.ts 'main' mit Component name ersetzen
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


