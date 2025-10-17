import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page'),
    // loadComponent: () => import('./gifs/pages/dashboard-page/dashboard-page').then(m => m.DashboardPage),
    children: [
      {
        path: 'trending',
        loadComponent: () => import('./gifs/pages/trending-page/trending-page'),
      },
      {
        path: 'trending2',
        loadComponent: () => import('./gifs/pages/trending2-page/trending2-page'),
      },
      {
        path: 'search',
        loadComponent: () => import('./gifs/pages/search-page/search-page'),
      },
      {
        path: 'history/:query',
        loadComponent: () => import('./gifs/pages/history-page/history-page'),
      },
      {
        path: '**',
        redirectTo: 'trending',
      }
    ],
  },
  {
    path: '**',
    redirectTo: 'dashboard',
  }
];
