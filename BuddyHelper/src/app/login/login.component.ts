import { Component } from '@angular/core';
import { User } from '../example/user.example';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  private username: string;
  private password: string;

  constructor(private authService: AuthService){

  }

  public login(): void{
    let user: User = {
      username: this.username,
      password: this.password
    }
    this.authService.login(user).then((result:boolean)=>{
      if(result){
        alert("Ihre Anmeldung war Erfolgreich!");
      }else{
        alert("Der Benutzername oder das Kennwort ist falsch.");
      }
    })
    }


}
