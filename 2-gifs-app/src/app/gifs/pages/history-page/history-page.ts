import { Component, computed, inject, input, Input, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { map } from 'rxjs';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../interfaces/gif.interface';
import { List } from '../../components/list/list';

@Component({
  selector: 'app-history-page',
  imports: [List],
  templateUrl: './history-page.html',
  styleUrl: './history-page.css'
})
export default class HistoryPage {

  readonly gifsService = inject(GifsService);

  // query = inject(ActivatedRoute).params.subscribe(params => {
  //   console.log(params);
  // });

  readonly query = toSignal(inject(ActivatedRoute).params.pipe(map(params => params['query'])));

  readonly gifs = computed(() => this.gifsService.getHistoryGifs(this.query() ?? ''));

  // readonly query = input.required<string>();
  //esto si en el doc de app.config.ts se le pasa conComponentInputBinding()



}
