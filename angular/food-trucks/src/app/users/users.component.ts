import { Component, OnInit } from '@angular/core';
import {User} from "./User";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [
      {
      "first_name": "Merrily",
      "last_name": "Dunkerton",
      "email": "mdunkerton0@imdb.com",
      "admin": false
    }, {
      "first_name": "Vance",
      "last_name": "Raveau",
      "email": "vraveau1@earthlink.net",
      "admin": false
    }, {
      "first_name": "Jere",
      "last_name": "Corington",
      "email": "jcorington2@ask.com",
      "admin": true
    }, {
      "first_name": "Hilary",
      "last_name": "Spoole",
      "email": "hspoole3@businessinsider.com",
      "admin": true
    }, {
      "first_name": "Christan",
      "last_name": "Elsip",
      "email": "celsip4@ocn.ne.jp",
      "admin": true
    }, {
      "first_name": "Dana",
      "last_name": "Cuddehay",
      "email": "dcuddehay5@google.com.hk",
      "admin": true
    }, {
      "first_name": "Flynn",
      "last_name": "Christaeas",
      "email": "fchristaeas6@bizjournals.com",
      "admin": true
    }, {
      "first_name": "Orion",
      "last_name": "Keitley",
      "email": "okeitley7@stanford.edu",
      "admin": true
    }, {
      "first_name": "Tiffy",
      "last_name": "Brundell",
      "email": "tbrundell8@ucoz.com",
      "admin": true
    }, {
      "first_name": "Willi",
      "last_name": "Phittiplace",
      "email": "wphittiplace9@nifty.com",
      "admin": false
    }, {
      "first_name": "Danita",
      "last_name": "Pitman",
      "email": "dpitmana@statcounter.com",
      "admin": true
    }, {
      "first_name": "Piper",
      "last_name": "Radage",
      "email": "pradageb@ebay.co.uk",
      "admin": true
    }];

  filteredUsers: User[] = [];

  constructor() { }

  ngOnInit() {

  }

  showAdmins(){
    this.filteredUsers = [];
    for(let user of this.users){
      if (user.admin === true){
        this.filteredUsers.push(user);
      }
    }

  }

  showUsers(){
    this.filteredUsers = [];

    for(let user of this.users){
      if (user.admin === false){
        this.filteredUsers.push(user);
      }
    }
  }

}
