import { Component, SystemJsNgModuleLoader, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { User } from '../example/user.example';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

import UserList from '../data/UserList.json'; 
//import { USER_Admin, USER_1 } from '../data/user.data';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  @Input() email: string;
  @Input() password: string;

  constructor(private authService: AuthService, private router: Router){

  }
  
  public login(): void{
    let user: User = {
      email: this.email,
      password: this.password
      
    }

    this.authService.login(user).then((result:boolean)=>{
      if(result){
        if(this.email == UserList.users[0].email){
          this.router.navigate(['admin-screen']);
        //alert("Ihre Anmeldung war Erfolgreich!");
        }else{
          this.router.navigate(['main-screen']);
        }
      }else{
         if((this.email.indexOf('@') < 0 )|| (this.email.indexOf('.') < 0)){
          alert("Bitte tragen Sie gültige E-mail Adresse ein.")
        }else{
          alert("Sie haben falsche E-mail Adresse oder falsches Kennwort eingetragen.");
        }
      }
    })
    }
    ngOnChanges(changes: SimpleChanges) {
      if(changes['this.password'])
    {
      this.password = changes['this.password'].currentValue;

    }}
}
