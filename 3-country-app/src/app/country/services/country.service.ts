import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseCountry } from '../interfaces/response-countries.interface';
import { catchError, delay, map, Observable, tap, throwError } from 'rxjs';
import type { Country } from '../interfaces/country.interface';
import { CountryMapper } from '../mappers/country.mapper';

@Injectable({providedIn: 'root'})


export class CountryService {

  private http = inject(HttpClient);

  private apiUrl = 'https://restcountries.com/v3.1';


  searchByCapital(term: string): Observable<Country[]> {
    const query = term.trim().toLowerCase();

    return this.http.get<ResponseCountry[]>(`${this.apiUrl}/capital/${query}`).pipe(
      map(CountryMapper.mapResponseCountriesToCountries),
      catchError(error => throwError(() => new Error('No se encontraron países')))
    )
  }

  searchByCountry(term: string): Observable<Country[]> {
    const query = term.trim().toLowerCase();

    return this.http.get<ResponseCountry[]>(`${this.apiUrl}/name/${query}`).pipe(
      map(CountryMapper.mapResponseCountriesToCountries),
      delay(3000),
      catchError(error => throwError(() => new Error(`no se encontraron países con el nombre ${term}`)))
    )
  }


  searchCountryByCode(code: string): Observable<Country> {
    return this.http.get<ResponseCountry[]>(`${this.apiUrl}/alpha/${code}`).pipe(
      // map(countries => countries.at(0)),
      map(countries => countries[0]),
      tap(console.log),
      map(CountryMapper.mapResponseCountryToCountry),
      tap(console.log),
      catchError(error => throwError(() => new Error(`no se encontró el país con el código ${code}`)))
    )
  }



}
