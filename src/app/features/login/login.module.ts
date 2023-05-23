import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './login-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';


@NgModule({
  declarations: [
    LoginPageComponent,
    CreateUserPageComponent
  ],
  imports: [
    LoginRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class LoginModule { }
