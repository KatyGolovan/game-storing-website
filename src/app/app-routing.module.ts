import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HearedMenuComponent} from './heared-menu/heared-menu.component';
import {LoginPageModule} from './login-page/login-page.module';
import {FriendsComponent} from './heared-menu/friends/friends.component';
import {GamesComponent} from './heared-menu/games/games.component';
import {LibraryComponent} from './heared-menu/library/library.component';
import {ProfileComponent} from './heared-menu/profile/profile.component'

const routes: Routes = [
  {
    component: HearedMenuComponent,
    children:[
      {
        component:FriendsComponent,
        path: 'friends'
      },
      {
        component:GamesComponent,
        path: 'games'
      },
      {
        component:LibraryComponent,
        path: 'library'
      },
      {
        component:ProfileComponent,
        path: 'profile'
      }
    ]
  },
  {
    component:LoginPageModule,
    path: ''
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
