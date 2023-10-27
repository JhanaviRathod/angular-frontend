import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowOrderConfirmedComponent } from './show-order-confirmed.component';

describe('ShowOrderConfirmedComponent', () => {
  let component: ShowOrderConfirmedComponent;
  let fixture: ComponentFixture<ShowOrderConfirmedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowOrderConfirmedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowOrderConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
