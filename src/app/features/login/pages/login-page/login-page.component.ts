import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  email: string = ""
  password: string = ""
  error = false

  constructor (
    // private userServices: UsersService,
    private router: Router
    ) {}

  authenticate () {
    // const user = this.userServices.getUserByEmailAndPassword(this.email, this.password) // função definida no service de users

    // if(user) {
    //   sessionStorage.setItem('user', JSON.stringify(user)) // ***
    //   this.router.navigateByUrl('colaborators');
    // } else {
    //   this.error = true;
    // }
  }
}
