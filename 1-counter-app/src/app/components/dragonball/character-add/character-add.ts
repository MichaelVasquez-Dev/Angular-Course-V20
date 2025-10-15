import { Component, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Character } from '../../../interfaces/Character.interface';

@Component({
  selector: 'dragonball-character-add',
  imports: [FormsModule],
  templateUrl: './character-add.html',
  styleUrl: './character-add.css'
})
export class CharacterAdd {

  name = signal('');
  power = signal(200);

  newCharacter = output<Character>();

  addCharacter() {

    if (this.name().trim().length === 0 || this.power() < 0) return;

    const character: Character = {
      id: Math.round(Math.random() * 1000),
      name: this.name(),
      power: this.power(),
    }

    this.newCharacter.emit(character);
    this.resetForm();
  }

  resetForm() {
    this.name.set('');
    this.power.set(200);
  }

}
