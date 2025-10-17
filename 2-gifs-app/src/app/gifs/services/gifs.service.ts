import { HttpClient } from '@angular/common/http';
import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import type { GiphyResponse } from '../interfaces/giphy.interface';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';
import { map, Observable, tap } from 'rxjs';

const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('searchHistory') || '{}');
}

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private http = inject(HttpClient);

  trandingGifs = signal<Gif[]>([]);
  trandingGifsLoading = signal(true);

  searchHistory = signal<Record<string, Gif[]>>(getLocalStorage());
  searchHistoryKeys = computed(() => Object.keys(this.searchHistory()));


  constructor() {
    this.loadTrendingGifs();
  }

  saveLocalStorage = effect(() => {
    localStorage.setItem('searchHistory', JSON.stringify(this.searchHistory()));
  });

  loadTrendingGifs() {
    this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/trending`, { params: { api_key: environment.giphyApiKey, limit: 20 } })
      .subscribe((response) => {
        const gifs = GifMapper.mapGiphyItemsToGifsArray(response.data);
        this.trandingGifs.set(gifs);
        this.trandingGifsLoading.set(false);
        console.log(gifs);
        // this.trandingGifs.set(GifMapper.mapGiphyItemsToGifsArray(response.data));
      });
  }

  searchGifs(query: string): Observable<Gif[]> {
    return this.http.get<GiphyResponse>(`${environment.giphyApiUrl}/gifs/search`, { params: { api_key: environment.giphyApiKey, q: query, limit: 20, rating: 'a' } })
      .pipe(
        map(({ data }) => data),
        map(gifs => GifMapper.mapGiphyItemsToGifsArray(gifs)),
        tap(gifs => this.searchHistory.update(prev => ({ ...prev, [query.toLowerCase().trim()]: gifs })))
      )
  }

  getHistoryGifs(query: string): Gif[] {
    return this.searchHistory()[query.toLowerCase().trim()] ?? [];
  }
}
