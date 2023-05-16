import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatButtonModule} from '@angular/material/button';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
