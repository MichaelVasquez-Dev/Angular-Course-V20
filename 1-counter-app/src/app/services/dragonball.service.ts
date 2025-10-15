import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../interfaces/Character.interface';


const getLocalStorage = (): Character[] => {
  return JSON.parse(localStorage.getItem('characters') || '[]');
}


@Injectable({
  providedIn: 'root'
})
export class DragonballService {

  characters = signal<Character[]>( getLocalStorage() );

  saveLocalStorage = effect(()=>{
    localStorage.setItem('characters', JSON.stringify(this.characters()));
  })

  addCharacter(character: Character) {
    this.characters.update(prev => [...prev, character]);
  }

}
