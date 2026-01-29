import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionMatriculas } from './gestion-matriculas';

describe('GestionMatriculas', () => {
  let component: GestionMatriculas;
  let fixture: ComponentFixture<GestionMatriculas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionMatriculas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionMatriculas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
