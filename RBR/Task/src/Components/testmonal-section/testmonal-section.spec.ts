import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestmonalSection } from './testmonal-section';

describe('TestmonalSection', () => {
  let component: TestmonalSection;
  let fixture: ComponentFixture<TestmonalSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestmonalSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestmonalSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
