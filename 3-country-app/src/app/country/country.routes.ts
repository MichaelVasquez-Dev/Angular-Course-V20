import { Routes } from '@angular/router';
import { ByCapitalPage } from './pages/by-capital-page/by-capital-page';
import { CountryLayouts } from './layouts/country-layouts/country-layouts';
import ByCountryPage from './pages/by-country-page/by-country-page';

const countryRoutes: Routes = [
  {
    path: '',
    component: CountryLayouts,
    children: [
      {
        path: 'by-capital',
        component: ByCapitalPage,
      },
      {
        path: 'by-country',
        loadComponent: () => import('./pages/by-country-page/by-country-page'),
        // component: ByCountryPage,
      },
      {
        path: 'by-region',
        loadComponent: () => import('./pages/by-region-page/by-region-page'),
      },
      {
        path: 'by-country/:code',
        loadComponent: () => import('./pages/country-page/country-page'),
      },
      {
        path: '**',
        redirectTo: 'by-capital',
      }
    ],
  },
]

export default countryRoutes;
