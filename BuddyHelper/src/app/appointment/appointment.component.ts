import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  toMain(): void {
    this.router.navigate(['main-screen']); //bringt einen schritt zurück zur Main-Screen

  }

}
