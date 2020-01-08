import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserList from '../data/UserList.json'; 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
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
    this.router.navigate(['main']);
  }

}

