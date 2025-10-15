import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Character {
  id: number;
  name: string;
  power: number;
}

@Component({
  selector: 'app-dragonball-page',
  imports: [FormsModule],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css'
})
export class DragonballPage {

  name = signal('');
  power = signal(200);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000},
    { id: 3, name: 'Yamcha', power: 500},
    { id: 4, name: 'Piccolo', power: 7000},
  ]);

  // powerClasses = computed((character: Character) => {
  //   return {
  //     'text-danger': character.power > 9000,
  //     'text-info': character.power <= 8000,
  //     'text-warning': character.power <= 7000,
  //   }
  // })

  addCharacter() {

    if (this.name().trim().length === 0 || this.power() < 0) return;

    const character: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    }
    this.characters.update(prev => [...prev, character]);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(200);
  }



}
