import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { CreateUserPageComponent } from './pages/create-user-page/create-user-page.component';

const routes: Routes = [
  { path:'', component: LoginPageComponent},
  { path: 'new-user', component: CreateUserPageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
