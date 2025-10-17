import { Component, input } from '@angular/core';
import { ListItem } from './list-item/list-item';
import { Gif } from '../../interfaces/gif.interface';

@Component({
  selector: 'gifs-list',
  imports: [ListItem],
  templateUrl: './list.html',
  styleUrl: './list.css'
})
export class List {

  imageUrls = input.required<Gif[]>();

}
