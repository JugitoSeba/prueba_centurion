import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BhaskaraComponent } from './bhaskara.component';

describe('BhaskaraComponent', () => {
  let component: BhaskaraComponent;
  let fixture: ComponentFixture<BhaskaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BhaskaraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BhaskaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
