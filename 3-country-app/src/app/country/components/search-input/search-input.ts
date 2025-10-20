import { Component, input, output } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.html'
})
export class SearchInput {

  placeholder = input.required<string>();
  onSearchEvent = output<string>();

  onSearch(value: string) {
    this.onSearchEvent.emit(value);
  }

}
