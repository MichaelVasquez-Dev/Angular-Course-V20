import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { TableDinamic } from '../../components/table-dinamic/table-dinamic';
import { CountryService } from '../../services/country.service';
import type { Country } from '../../interfaces/country.interface';
import { firstValueFrom, of } from 'rxjs';
// import { rxResource } from '@angular/core/rxjs-interop';
import { rxResource } from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, TableDinamic],
  templateUrl: './by-capital-page.html'
})
export class ByCapitalPage {

  readonly countryService = inject(CountryService);

  columnsForTable = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población', 'ver mas'];
  countries = signal<Country[]>([]);




  // isLoading = signal(false);
  // isError = signal<string|null>(null);

  // onSearch(value: string) {
  //   if(this.isLoading()) return;
  //   this.isLoading.set(true);
  //   this.isError.set(null);

  //   if(!value) return;

  //   this.countryService.searchByCapital(value).subscribe({
  //     next: (countries: Country[]) => {
  //       this.countries.set(countries);
  //     },
  //     error: (error) => {
  //       this.isError.set(error.message);
  //       this.countries.set([]);
  //     },
  //     complete: () => {
  //       this.isLoading.set(false);
  //     },
  //   });
  // }



  //EXPERIMENTAL PARA OMITIR LA FUNCION DE BUSQUEDA ONSEARCH

  //USO CON RESOURCE  QUE SOLO PUEDE RETORNAR CON UNA PROMESA
  query = signal<string>('');
  countryResourcePromise = resource({
    // request: () => ({ query: this.query()}),  // ANTES ERA REQUEST V19
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if(!params.query) return [];
      // return this.countryService.searchByCapital(params.query);
      return await firstValueFrom(this.countryService.searchByCapital(params.query));
    },

  })


  //USO DE RXRESOURCE QUE PUEDE RETORNAR CON UN OBSERVABLE
  countryResourceRxs = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({params}) => {
      if(!params.query) return of([]);
      console.log(params)
      return this.countryService.searchByCapital(params.query);
    },
  })

}
