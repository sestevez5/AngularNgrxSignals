import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatriculaItem } from './matricula-item';

describe('MatriculaItem', () => {
  let component: MatriculaItem;
  let fixture: ComponentFixture<MatriculaItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatriculaItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MatriculaItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
