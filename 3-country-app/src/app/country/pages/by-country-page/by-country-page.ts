import { Component, inject, resource, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { TableDinamic } from '../../components/table-dinamic/table-dinamic';
import { firstValueFrom, of } from 'rxjs';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, TableDinamic],
  templateUrl: './by-country-page.html'
})
export default class ByCountryPage {

  columnsForTable = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población', 'ver mas'];
  // countries = signal<any[]>([]);

  // onSearch(value: string) {
  //   console.log('Desde ByCountryPage', value);
  // }

  readonly countryService = inject(CountryService);

  query = signal<string>('');
  countryResource = resource({
    params: () => ({ query: this.query() }),
    loader: async ({ params }) => {
      if(!params.query) return [];
      return await firstValueFrom(this.countryService.searchByCountry(params.query));
    },

  })

  countryResourceRx = rxResource({
    params: () => ({ query: this.query() }),
    stream: ({params}) => {
      if(!params.query) return of([]);
      console.log(params)
      return this.countryService.searchByCountry(params.query);
    }
  })



}
