import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageViewDetailsComponent } from './package-view-details.component';

describe('PackageViewDetailsComponent', () => {
  let component: PackageViewDetailsComponent;
  let fixture: ComponentFixture<PackageViewDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageViewDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PackageViewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
