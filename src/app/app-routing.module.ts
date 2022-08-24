import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'matches',
    loadChildren: () => import('./pages/match-list/match-list.module').then(m => m.MatchListModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/player-list/player-list.module').then(m => m.PlayerListModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'career',
    loadChildren: () => import('./pages/career/career.module').then(m => m.CareerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
