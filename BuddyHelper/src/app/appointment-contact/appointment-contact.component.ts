import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import users from '../data/UserList.json';
import UserList from '../data/UserList.json'; 
import { element } from 'protractor';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-appointment-contact',
  templateUrl: './appointment-contact.component.html',
  styleUrls: ['./appointment-contact.component.scss']
})

export class AppointmentContactComponent implements OnInit {

  private contactList: string = ""
  constructor(private router: Router) {  
  }
  ngOnInit() {
  }
  
  getContacts():string {
    for (let index = 1; index < UserList.users.length; index++) {
         this.contactList += UserList.users[index].name + "\n" + "\n";    
    }
   return this.contactList;
}
  goBack(): void {
    this.router.navigate(['appointments']);
  }
  help(): void {
    alert("Ihr Notfallkontakt wurde benachrichtigt")

  }

}
