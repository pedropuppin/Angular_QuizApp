import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { skipWhile, take} from 'rxjs';
import { UserAuthService } from 'src/app/shared/services/facade/user-auth.service';

@Component({
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPageComponent {

  constructor (
    public userAuth: UserAuthService,
    private router: Router,
  ) {}

  colorControl = new FormControl('accent' as ThemePalette)
  hide = true;
  email: string = ""
  password: string = ""

  authenticate() {
    this.userAuth.loginUser(this.email, this.password)
    this.userAuth.isLoggedIn$.pipe(
      skipWhile(isLoggedIn => !isLoggedIn),
      take(1)
    ).subscribe(
      isLoggedIn => {
        if(isLoggedIn) {
          this.router.navigateByUrl('home');
        }
      }
    )
  }
}
