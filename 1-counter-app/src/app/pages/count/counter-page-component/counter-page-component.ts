import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page-component',
  imports: [],
  templateUrl: './counter-page-component.html',
  styleUrl: './counter-page-component.css'
})
export class CounterPageComponent {

  public counter = 10;
  public counterSignal = signal(10);

  operation(num: number) {
    this.counter += num;
    this.counterSignal.update(prev => prev + num);
  }

  reset() {
    this.counter = 0;
    this.counterSignal.set(0);
  }




}
