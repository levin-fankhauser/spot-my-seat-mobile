import { Routes } from '@angular/router';
import { AuthGuard } from './services/auth-guard.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'create-seat',
    loadComponent: () =>
      import('./pages/create-seat/create-seat.page').then(
        (m) => m.CreateSeatPage
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./pages/login/login.page').then((m) => m.LoginPage),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('./pages/register/register.page').then((m) => m.RegisterPage),
  },
  {
    path: 'user',
    loadComponent: () =>
      import('./pages/user/user.page').then((m) => m.UserPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'manage',
    loadComponent: () =>
      import('./pages/manage/manage.page').then((m) => m.ManagePage),
    canActivate: [AuthGuard],
  },
  {
    path: 'seat/:id',
    loadComponent: () =>
      import('./pages/seat/seat.page').then((m) => m.SeatPage),
    canActivate: [AuthGuard],
  },
  {
    path: 'search',
    loadComponent: () =>
      import('./pages/search/search.page').then((m) => m.SearchPage),
    canActivate: [AuthGuard],
  },
];
