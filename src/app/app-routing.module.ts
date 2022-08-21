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
    path: 'matches/create',
    loadChildren: () => import('./pages/create-match/create-match.module').then(m => m.CreateMatchModule)
  },
  {
    path: 'players',
    loadChildren: () => import('./pages/player-list/player-list.module').then(m => m.PlayerListModule)
  },
  {
    path: 'players/create',
    loadChildren: () => import('./pages/create-player/create-player.module').then(m => m.CreatePlayerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
