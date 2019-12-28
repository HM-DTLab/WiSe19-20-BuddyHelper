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



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminScreenComponent,
    MainScreenComponent,
    AppointmentComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
