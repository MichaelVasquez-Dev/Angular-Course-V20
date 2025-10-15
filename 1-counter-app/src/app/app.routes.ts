import { Routes } from '@angular/router';
import { HeroPage } from './pages/hero/hero-page/hero-page';
import { CounterPage } from './pages/count/counter-page/counter-page';
import { DragonballPage } from './pages/dragonball/dragonball-page/dragonball-page';
import { DragonballSuperPage } from './pages/dragonball-super/dragonball-super-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPage,
  },
  {
    path: 'hero',
    component: HeroPage,
  },
  {
    path: 'dragonball',
    component: DragonballPage,
  },
  {
    path: 'dragonball-super',
    component: DragonballSuperPage,
  },
  {
    path: '*',
    redirectTo: '',
  }
];
