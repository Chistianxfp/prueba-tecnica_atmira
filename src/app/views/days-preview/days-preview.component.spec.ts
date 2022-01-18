import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysPreviewComponent } from './days-preview.component';

describe('DaysPreviewComponent', () => {
  let component: DaysPreviewComponent;
  let fixture: ComponentFixture<DaysPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DaysPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
