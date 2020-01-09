import { Component, OnInit } from '@angular/core';
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
  toCalendar(): void {
    this.router.navigate(['calendar']);
  }
toContacts(): void {
  this.router.navigate(['contacts']); 
}
toMessages(): void {
  this.router.navigate(['messager']);

}
help(): void {
  alert("Ihr Notfallkontakt wurde benachrichtigt")

}

}
