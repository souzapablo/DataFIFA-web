import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'cadastrar',
    loadChildren: () => import('./pages/register/register.module').then(m => m.RegisterModule),
  },
  {
    path: 'partidas',
    loadChildren: () => import('./pages/match-list/match-list.module').then(m => m.MatchListModule)
  },
  {
    path: 'jogadores',
    loadChildren: () => import('./pages/player-list/player-list.module').then(m => m.PlayerListModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'carreiras',
    loadChildren: () => import('./pages/career/career.module').then(m => m.CareerModule)
  },
  {
    path: 'adversarios',
    loadChildren: () => import('./pages/opponent/opponent.module').then(m => m.OpponentModule)
  },
  {
    path: 'partida',
    loadChildren: () => import('./pages/match/match.module').then(m => m.MatchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
