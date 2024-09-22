import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgramOutcomeComponent } from './program-outcome.component';

describe('ProgramOutcomeComponent', () => {
  let component: ProgramOutcomeComponent;
  let fixture: ComponentFixture<ProgramOutcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgramOutcomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgramOutcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
