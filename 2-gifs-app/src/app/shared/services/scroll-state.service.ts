import { Injectable, signal } from '@angular/core';

@Injectable({providedIn: 'root'})
export class ScrollStateService {

  private trandingScrollState = signal(0);

  setScrollState(state: number) {
    this.trandingScrollState.set(state);
  }

  getScrollState() {
    return this.trandingScrollState();
  } 

}
