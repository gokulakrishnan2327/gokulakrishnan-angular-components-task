import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoCardsComponentComponent } from './peo-cards-component.component';

describe('PeoCardsComponentComponent', () => {
  let component: PeoCardsComponentComponent;
  let fixture: ComponentFixture<PeoCardsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PeoCardsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeoCardsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
