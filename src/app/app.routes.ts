import { Routes } from '@angular/router';

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
  },
];
