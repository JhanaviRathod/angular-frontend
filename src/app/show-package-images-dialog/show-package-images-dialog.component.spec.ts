import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowPackageImagesDialogComponent } from './show-package-images-dialog.component';

describe('ShowPackageImagesDialogComponent', () => {
  let component: ShowPackageImagesDialogComponent;
  let fixture: ComponentFixture<ShowPackageImagesDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowPackageImagesDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowPackageImagesDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
