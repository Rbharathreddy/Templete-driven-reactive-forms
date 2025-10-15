import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteSection } from './site-section';

describe('SiteSection', () => {
  let component: SiteSection;
  let fixture: ComponentFixture<SiteSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SiteSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
