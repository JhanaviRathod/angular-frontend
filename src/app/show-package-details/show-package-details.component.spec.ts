import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPackageDetailsComponent } from './show-package-details.component';

describe('ShowPackageDetailsComponent', () => {
  let component: ShowPackageDetailsComponent;
  let fixture: ComponentFixture<ShowPackageDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPackageDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPackageDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
