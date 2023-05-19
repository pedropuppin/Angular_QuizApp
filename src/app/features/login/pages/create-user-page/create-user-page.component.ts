import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { Router } from '@angular/router';
import { UsersApiService } from 'src/app/shared/services/core/async/users-api.service';


@Component({
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent {

  constructor(
    private router: Router,
    private usersService: UsersApiService,
  ) { }

  hide = true;
  colorControl = new FormControl('accent' as ThemePalette);

  newUserForm = new FormGroup({
    name: new FormControl<string | null>(null, [Validators.required]),
    surname: new FormControl<string | null>(null, [Validators.required]),
    email: new FormControl<string | null>(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    const formValue: any = this.newUserForm.getRawValue();
    this.usersService.createUser(formValue).subscribe(
      res => {
        console.log('Usuário criado com sucesso:', res);
        this.router.navigateByUrl('login');
      }
    );
  }
}
