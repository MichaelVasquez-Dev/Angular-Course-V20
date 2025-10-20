import { Component, input } from '@angular/core';

@Component({
  selector: 'table-dinamic',
  imports: [],
  templateUrl: './table-dinamic.html'
})
export class TableDinamic {

  columns = input.required<string[]>();
  data = input.required<any[]>();

}
