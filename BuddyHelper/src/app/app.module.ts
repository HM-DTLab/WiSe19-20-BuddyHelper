import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalendarComponent } from './calendar/calendar.component';
import { MatDatepickerModule, MatButtonModule  } from '@angular/material'
import { MatMomentDateModule } from '@angular/material-moment-adapter';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { AppointmentContactComponent } from './appointment-contact/appointment-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminScreenComponent,
    MainScreenComponent,
    AppointmentComponent,
    CalendarComponent,
    AppointmentContactComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule,
    FullCalendarModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatButtonModule,
    MatInputModule,
    NoopAnimationsModule, 
    MatCheckboxModule,
    MatListModule,
    MatMenuModule,
    MatIconModule,
    MatSelectModule,
    MatProgressBarModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
