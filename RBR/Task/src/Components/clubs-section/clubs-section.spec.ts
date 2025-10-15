import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubsSection } from './clubs-section';

describe('ClubsSection', () => {
  let component: ClubsSection;
  let fixture: ComponentFixture<ClubsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
