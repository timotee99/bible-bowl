import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component';
import { SignInComponent } from './components/user/sign-in/sign-in.component';


const routes: Routes = [
  { path: 'game', component: GameComponent },
  { path: 'home', component: HomeComponent },
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },

  {
    path: 'game',
    redirectTo: '/game',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
