import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustodetailsComponent } from './custodetails.component';

describe('CustodetailsComponent', () => {
  let component: CustodetailsComponent;
  let fixture: ComponentFixture<CustodetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustodetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustodetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
