import { Component, signal } from '@angular/core';
import { SearchInput } from '../../components/search-input/search-input';
import { TableDinamic } from '../../components/table-dinamic/table-dinamic';

@Component({
  selector: 'app-by-capital-page',
  imports: [SearchInput, TableDinamic],
  templateUrl: './by-capital-page.html'
})
export class ByCapitalPage {

  columnsForTable = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población', 'ver mas'];
  countries = signal<any[]>([]);

  onSearch(value: string) {
    console.log('Desde ByCapitalPage', value);
  }

}
