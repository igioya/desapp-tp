import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetireCreditComponent } from './retire-credit.component';

describe('RetireCreditComponent', () => {
  let component: RetireCreditComponent;
  let fixture: ComponentFixture<RetireCreditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetireCreditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetireCreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
