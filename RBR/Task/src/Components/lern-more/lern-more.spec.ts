import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LernMore } from './lern-more';

describe('LernMore', () => {
  let component: LernMore;
  let fixture: ComponentFixture<LernMore>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LernMore]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LernMore);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
