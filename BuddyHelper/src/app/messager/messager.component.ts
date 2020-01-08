import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import  Conversations  from "../data/conversations.json";

@Component({
  selector: 'app-messager',
  templateUrl: './messager.component.html',
  styleUrls: ['./messager.component.scss']
})
export class MessagerComponent implements OnInit {
  conversations: string[];

  

  constructor(private router: Router) { }

  ngOnInit() {
    this.getConversations;
  }

  // load list of current conversations
  getConversations(): string[] {
    this.conversations = Object.keys(Conversations.participants.c1);
    return this.conversations;
    

    // TODO: Compare active User with Participant

    // TODO: Extract conversation

    // TODO: Show conversation with User-labeled messages


  }
  toContacts(): void {
    //this.router.navigate(['contacts']);

  }
  toAppointments(): void {
    this.router.navigate(['appointments']);
  }
  toMain(): void {
    this.router.navigate(['main-screen']); //bringt einen schritt zurück zur Main-Screen
  }
  toCalendar(): void {
    this.router.navigate(['calendar']);
  }
  goTo(msg:string):void{
    alert("Konversation mit "+msg);
  }

}
