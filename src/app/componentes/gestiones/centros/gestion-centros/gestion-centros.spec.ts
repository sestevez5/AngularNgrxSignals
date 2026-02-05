import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCentros } from './gestion-centros';

describe('GestionCentros', () => {
  let component: GestionCentros;
  let fixture: ComponentFixture<GestionCentros>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionCentros]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionCentros);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
