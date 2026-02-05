import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubsistemaGestion } from './subsistema-gestion';

describe('SubsistemaGestion', () => {
  let component: SubsistemaGestion;
  let fixture: ComponentFixture<SubsistemaGestion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubsistemaGestion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubsistemaGestion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
