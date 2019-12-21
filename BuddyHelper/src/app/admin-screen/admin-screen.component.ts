import { Component, OnInit } from '@angular/core';
import { User } from '../example/user.example';
import { USER_1 } from '../data/user.data';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent {

  protected newUsername : string;
  protected newPassword : string;
  //Oder z.b Krankenkarte nummer etc. Zur indentifizierung
  //wer diese Person ist.
  private newPersonalCardNumber : string;

  constructor(private router: Router) {
  }

  register(): void{
    let user: User = {
      email: this.newUsername,
      password: this.newPassword
    }
    if(user.email == USER_1.email){
      alert("Dieser Benutzername ist bereits in verwendung")
    }
    else{
      alert("Dieser Benutzername ist verfügbar")
    }
  }
  backToMain(): void{
    this.router.navigate(['main-screen']);
  }
}
