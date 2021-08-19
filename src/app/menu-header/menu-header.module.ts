import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GamesComponent } from './games/games.component';
import { LibraryComponent } from './library/library.component';
import { FriendsComponent } from './friends/friends.component';
import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    GamesComponent,
    LibraryComponent,
    FriendsComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MenuHeaderModule { }
