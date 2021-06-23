import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartMessageComponent } from './cart-message.component';

describe('CartMessageComponent', () => {
  let component: CartMessageComponent;
  let fixture: ComponentFixture<CartMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
