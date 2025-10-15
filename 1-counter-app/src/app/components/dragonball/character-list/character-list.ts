import { Component, input, Input } from '@angular/core';
import { Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dragonball-character-list',
  imports: [],
  templateUrl: './character-list.html',
  styleUrl: './character-list.css'
})
export class CharacterList {

  // @Input() characters: Character[] = [];
  characters = input.required<Character[]>();
  listName = input.required<string>();

}
