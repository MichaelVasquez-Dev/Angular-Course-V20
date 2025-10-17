import { Component, input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gif.interface';

@Component({
  selector: 'gifs-list-item',
  imports: [],
  templateUrl: './list-item.html',
  styleUrl: './list-item.css'
})
export class ListItem {


  imageUrl = input.required<string>();

}
