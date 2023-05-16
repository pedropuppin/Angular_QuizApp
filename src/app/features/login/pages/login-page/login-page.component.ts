import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/shared/services/core/async/users-api.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {

  constructor (
    private userService: UsersApiService,
    private router: Router,
  ) {}

  colorControl = new FormControl('accent' as ThemePalette)
  hide = true;
  email: string = ""
  password: string = ""
  error = false

  authenticate() {
    this.userService.authenticate(this.email, this.password)
      .subscribe(
        response => {
          if (response && response.length > 0) {
            const user = JSON.parse(JSON.stringify(response[0]));
            sessionStorage.setItem('user', JSON.stringify(user));
            this.router.navigateByUrl('home');
            console.log('Autenticação bem-sucedida:', response);
          } else {
            this.error = true;
            console.error('Falha na autenticação: Usuário não encontrado');
          }
        },
        error => {
          console.error('Falha na autenticação:', error);
          this.router.navigateByUrl('login');
        }
      );
  }

  navigateByUrl(url: string) {
    this.router.navigateByUrl(url);
  }
}
