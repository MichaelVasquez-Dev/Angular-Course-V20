import { Component, signal } from '@angular/core';
import { TableDinamic } from '../../components/table-dinamic/table-dinamic';

@Component({
  selector: 'app-by-region-page',
  imports: [TableDinamic],
  templateUrl: './by-region-page.html'
})
export default class ByRegionPage {

  columnsForTable = ['#', 'Icono', 'Bandera', 'Nombre', 'Capital', 'Población', 'ver mas'];
  countries = signal<any[]>([]);

}
