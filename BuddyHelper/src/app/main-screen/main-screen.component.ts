import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-screen',
  templateUrl: './main-screen.component.html',
  styleUrls: ['./main-screen.component.scss']
})
export class MainScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  logout(): void {
    this.router.navigate(['']); //Logout bringt einen zurück zur Anmeldeseite

  }

  // Methodenstubs für weiteres Routing zu anderen Komponenten
  toMessages(): void {
    //this.router.navigate(['messager']);

  }

  toContacts(): void {
    //this.router.navigate(['contacts']);

  }

  toAppointments(): void {
    //this.router.navigate(['appointments']);

  }

}
