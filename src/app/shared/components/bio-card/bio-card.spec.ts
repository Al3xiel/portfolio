import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BioCard } from './bio-card';

describe('BioCard', () => {
  let component: BioCard;
  let fixture: ComponentFixture<BioCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BioCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BioCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
