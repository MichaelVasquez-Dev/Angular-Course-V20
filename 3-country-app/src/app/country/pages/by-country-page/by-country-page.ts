import { Component, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { TableDinamic } from '../../components/table-dinamic/table-dinamic';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInput, TableDinamic],
  templateUrl: './by-country-page.html'
})
export default class ByCountryPage {

  columnsForTable = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población', 'ver mas'];
  countries = signal<any[]>([]);

  onSearch(value: string) {
    console.log('Desde ByCountryPage', value);
  }

}
