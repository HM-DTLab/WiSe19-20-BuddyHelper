import { Component } from '@angular/core';
import { User } from '../example/user.example';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  protected username: string;
  protected password: string;

  constructor(private authService: AuthService, private router: Router){

  }

  public login(): void{
    let user: User = {
      username: this.username,
      password: this.password
    }
    this.authService.login(user).then((result:boolean)=>{
      if(result){
          this.router.navigate(['admin-screen']);
        //alert("Ihre Anmeldung war Erfolgreich!");
      }else{
        alert("Der Benutzername oder das Kennwort ist falsch.");
      }
    })
    }


}
