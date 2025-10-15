import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-page',
  imports: [],
  templateUrl: './counter-page.html',
  styleUrl: './counter-page.css'
})
export class CounterPage {
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
