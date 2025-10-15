import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CharacterList } from '../../components/dragonball/character-list/character-list';
import { CharacterAdd } from '../../components/dragonball/character-add/character-add';
import { DragonballService } from '../../services/dragonball.service';


@Component({
  selector: 'app-dragonball-super-page',
  imports: [FormsModule, CharacterList, CharacterAdd],
  templateUrl: './dragonball-super-page.html',
  styleUrl: './dragonball-super-page.css'
})
export class DragonballSuperPage {


  public dragonBallService = inject(DragonballService);


}
