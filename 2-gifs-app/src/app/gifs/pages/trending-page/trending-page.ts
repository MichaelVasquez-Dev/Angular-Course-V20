import { Component, computed, inject, signal } from '@angular/core';
import { List } from '../../components/list/list';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  imports: [List],
  templateUrl: './trending-page.html',
  styleUrl: './trending-page.css'
})
export default class TrendingPage {

  readonly gifsService = inject(GifsService);

}
