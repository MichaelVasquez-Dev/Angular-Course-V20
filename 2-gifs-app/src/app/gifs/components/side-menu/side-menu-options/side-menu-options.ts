import { Component, inject } from '@angular/core';
import { MenuOption } from '../../../interfaces/MenuOption.interface';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'gifs-side-menu-options',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './side-menu-options.html',
  styleUrl: './side-menu-options.css'
})
export class SideMenuOptions {

  readonly gifsService = inject(GifsService);

  readonly menuOptions: MenuOption[] = [
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending',
      sublabel: 'Gifs populares',
      route: '/dashboard/trending',
    },
    {
      icon: 'fa-solid fa-chart-line',
      label: 'Trending2',
      sublabel: 'Gifs populares',
      route: '/dashboard/trending2',
    },
    {
      icon: 'fa-solid fa-magnifying-glass',
      label: 'Buscador',
      sublabel: 'Buscar gifs',
      route: '/dashboard/search',
    }
  ];

}
