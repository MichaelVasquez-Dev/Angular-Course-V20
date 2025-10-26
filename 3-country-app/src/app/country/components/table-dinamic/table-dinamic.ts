import { Component, input } from '@angular/core';
import type { Country } from '../../interfaces/country.interface';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'table-dinamic',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './table-dinamic.html'
})
export class TableDinamic {

  columns = input.required<string[]>();
  data = input.required<Country[]>();

  errorMessage = input<string|unknown|null>('');
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

}
