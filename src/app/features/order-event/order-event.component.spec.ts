import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderEventComponent } from './order-event.component';

describe('OrderEventComponent', () => {
  let component: OrderEventComponent;
  let fixture: ComponentFixture<OrderEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
