import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForfaitGestionComponent } from './forfait-gestion.component';

describe('ForfaitGestionComponent', () => {
  let component: ForfaitGestionComponent;
  let fixture: ComponentFixture<ForfaitGestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForfaitGestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForfaitGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
