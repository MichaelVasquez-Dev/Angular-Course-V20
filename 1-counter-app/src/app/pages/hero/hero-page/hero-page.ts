import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  templateUrl: './hero-page.html',
  styleUrl: './hero-page.css'
})
export class HeroPage {

  public name = signal('Ironman');
  public age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);
  capitalizeName = computed(() => this.name().toUpperCase());

  // getHeroDescription() {
  //   return `${this.name()} - ${this.age()}`;
  // }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }



}
