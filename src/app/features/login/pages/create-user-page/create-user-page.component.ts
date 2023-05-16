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
    name: new FormControl<string | null>('', [Validators.required]),
    surname: new FormControl<string | null>('', [Validators.required]),
    email: new FormControl<string | null>('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    const formValue: any = this.newUserForm.value
    console.log(formValue);
    this.usersService.createUser(formValue);
    this.router.navigateByUrl('categories')
  }
}
