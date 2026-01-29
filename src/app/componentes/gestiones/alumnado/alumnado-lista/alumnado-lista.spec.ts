import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnadoLista } from './alumnado-lista';

describe('AlumnadoLista', () => {
  let component: AlumnadoLista;
  let fixture: ComponentFixture<AlumnadoLista>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlumnadoLista]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlumnadoLista);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
