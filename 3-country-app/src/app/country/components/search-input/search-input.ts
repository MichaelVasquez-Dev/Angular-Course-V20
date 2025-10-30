import { Component, effect, input, output, signal } from '@angular/core';

@Component({
  selector: 'search-input',
  imports: [],
  templateUrl: './search-input.html'
})
export class SearchInput {

  placeholder = input.required<string>();
  onSearchEvent = output<string>();

  inputValue = signal<string>('');

  debounceEffect =  effect((onCleanup) =>{
    const value = this.inputValue();

    const timeout = setTimeout(() => {
      this.onSearchEvent.emit(value);
    }, 500);

    onCleanup(() => {
      clearTimeout(timeout);
    });
  })


  onSearch(value: string) {
    this.onSearchEvent.emit(value);
  }

}
