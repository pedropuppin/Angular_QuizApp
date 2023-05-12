import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';




export const sharedComponents = [
  HeaderComponent,
  FooterComponent,
]

export const sharedModules = [
  CommonModule,
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
]

@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [
    ...sharedModules
  ],
  exports: [
    ...sharedComponents,
  ]
})
export class SharedModule { }
