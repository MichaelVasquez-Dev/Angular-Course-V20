import { AfterViewInit, Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from 'src/app/shared/services/scroll-state.service';

@Component({
  selector: 'app-trending2-page',
  imports: [],
  templateUrl: './trending2-page.html',
  styleUrl: './trending2-page.css'
})
export default class Trending2Page implements AfterViewInit {


  readonly gifsService = inject(GifsService);
  readonly scrollStateService = inject(ScrollStateService);
  scrollDivRef = viewChild<ElementRef>('groupDiv')

  ngAfterViewInit(): void {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    scrollDiv.scrollTop = this.scrollStateService.getScrollState();

  }

  onScroll() {
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;

    const scrollTop = scrollDiv.scrollTop;
    const clientHeigth = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    const isAtBottom = scrollTop + clientHeigth + 300 >= scrollHeight;
    this.scrollStateService.setScrollState(scrollTop);

    if(isAtBottom ){
      this.gifsService.loadTrendingGifs();
    }

  }

}
