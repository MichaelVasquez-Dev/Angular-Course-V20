import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopMenu } from '../../components/top-menu/top-menu';

@Component({
  selector: 'app-country-layouts',
  imports: [RouterOutlet, TopMenu],
  templateUrl: './country-layouts.html'
})
export class CountryLayouts {

}
