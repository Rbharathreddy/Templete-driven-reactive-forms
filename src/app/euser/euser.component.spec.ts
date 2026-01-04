import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EuserComponent } from './euser.component';

describe('EuserComponent', () => {
  let component: EuserComponent;
  let fixture: ComponentFixture<EuserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EuserComponent]
    });
    fixture = TestBed.createComponent(EuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
