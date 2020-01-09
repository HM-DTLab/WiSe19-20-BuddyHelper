import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import UserList from '../data/UserList.json'; 

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  private contactList: string[] = [];
  constructor(private router: Router) {  
    
  }
  ngOnInit() {
  }
  
  getContacts():string[] {
    // create variable to save the list in. For reasons unknown this is absolutely necessary!!!
    var listOfNames : string[] = [];
    for (let index = 1; index < UserList.users.length; index++) {
      // extract name
      var name:string = UserList.users[index].name;
      // append name to list
      listOfNames.push(name);
    }
    this.contactList=listOfNames;
   return listOfNames;
  }
  goBack(): void {
    this.router.navigate(['main-screen']);
  }

}

