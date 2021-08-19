import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigninComponent } from './signin/signin.component';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  declarations: [
    SigninComponent
  ],
  imports: [
    CommonModule, 
    FormsModule,
    MatButtonModule
  ],
  exports: [
    SigninComponent,
  ],
})
export class LoginPageModule { }
