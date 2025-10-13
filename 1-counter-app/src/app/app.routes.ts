import { Routes } from '@angular/router';
import { CounterPageComponent } from './pages/count/counter-page-component/counter-page-component';
import { HeroPage } from './pages/hero/hero-page/hero-page';

export const routes: Routes = [
  {
    path: '',
    component: CounterPageComponent,
  },
  {
    path: 'hero',
    component: HeroPage,
  }
];
