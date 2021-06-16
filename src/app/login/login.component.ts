import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user;
  public pass;
  public trespass = 'aaaa';

  constructor() { }

  ngOnInit(): void {
  }
  loginMethod(user, pass){
    if (pass != this.trespass) {
      alert("Wrong password");
    } else {
      alert("Hi there");
    }
  }
}
