import { Component, inject, signal } from '@angular/core';
import { List } from '../../components/list/list';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'app-search-page',
  imports: [List],
  templateUrl: './search-page.html',
  styleUrl: './search-page.css'
})
export default class SearchPage {

  readonly gifsService = inject(GifsService);
  gifs = signal<Gif[]>([]);

  onSearch(query: string) {
    this.gifsService.searchGifs(query).subscribe((response) => {
      this.gifs.set(response);
    });
  }

}
