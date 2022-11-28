import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPokemonComponent } from './grid-pokemon.component';

describe('GridPokemonComponent', () => {
  let component: GridPokemonComponent;
  let fixture: ComponentFixture<GridPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPokemonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
