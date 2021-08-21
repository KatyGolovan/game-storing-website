import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {LoginPageModule} from './login-page/login-page.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { HearedMenuComponent } from './heared-menu/heared-menu.component'

@NgModule({
  declarations: [
    AppComponent,
    HearedMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginPageModule,
    HearedMenuComponent,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
