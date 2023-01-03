import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderNewStep2Component } from './order-new-step2.component';

describe('OrderNewStep2Component', () => {
  let component: OrderNewStep2Component;
  let fixture: ComponentFixture<OrderNewStep2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderNewStep2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderNewStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
