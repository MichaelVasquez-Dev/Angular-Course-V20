import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterAdd } from './character-add';

describe('CharacterAdd', () => {
  let component: CharacterAdd;
  let fixture: ComponentFixture<CharacterAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharacterAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
