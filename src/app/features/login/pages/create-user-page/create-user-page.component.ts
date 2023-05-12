import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  templateUrl: './create-user-page.component.html',
  styleUrls: ['./create-user-page.component.scss']
})
export class CreateUserPageComponent {

  constructor(
    private router: Router,
    private usersService: UsersService
  ) { }

  newUserForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  onSubmit() {
    const formValue: any = this.newUserForm.value // pega o valor do formulário e guarda na variável formValue
    this.router.navigateByUrl('categories')
    console.log(formValue);
    // this.usersService.create(formValue).subscribe((response) => {
      //   this.router.navigateByUrl('categories')
    // })
  }
}


