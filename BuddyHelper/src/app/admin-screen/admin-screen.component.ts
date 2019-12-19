import { Component, OnInit } from '@angular/core';
import { User } from '../example/user.example';
import { USER } from '../data/user.data';
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
      username: this.newUsername,
      password: this.newPassword
    }
    if(user.username == USER.username){
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
