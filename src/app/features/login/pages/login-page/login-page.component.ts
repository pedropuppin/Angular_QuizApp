import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UsersApiService } from 'src/app/shared/services/core/async/users-api.service';
import { User } from 'src/app/shared/types/user.model';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
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
    this.userService.authenticate(this.email, this.password).subscribe(
      res => {
        const response = JSON.parse(JSON.stringify(res));
        if(response.length > 0) {
          const user = JSON.parse(JSON.stringify(response[0]));
          sessionStorage.setItem('user', JSON.stringify(user));
          this.router.navigateByUrl('home');
          // console.log('Autenticação bem-sucedida:', response);
        } else {
          // console.error('Falha na autenticação: Usuário não encontrado');
          this.error = true;
        }
      },
      error => {
        // console.error('Falha na autenticação:', error);
        this.router.navigateByUrl('login');
      }
    )
  }
}
