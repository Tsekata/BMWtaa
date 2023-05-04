import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  private user ={
    id: 1,
    username: "Tsetso"

  }
  constructor(
    private router: Router
  ) { }


  ngOnInit(): void {
  }
    login() {
      this.router.navigateByUrl("/body")
      localStorage.setItem("LoggedUser",JSON.stringify(this.user));
    }
  

}
