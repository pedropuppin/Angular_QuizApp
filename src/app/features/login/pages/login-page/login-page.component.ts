import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor (
    private userServices: UsersService,
    private router: Router,
  ) {}

  email: string = ""
  password: string = ""
  error = false

  authenticate () {
    const user = this.userServices.getUserByEmailAndPassword(this.email, this.password)
    if(user) {
      sessionStorage.setItem('user', JSON.stringify(user))
      this.router.navigateByUrl('home');
      // console.log(user)
    } else {
      this.error = true;
    }
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
