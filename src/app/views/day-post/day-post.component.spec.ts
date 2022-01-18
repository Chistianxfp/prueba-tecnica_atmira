import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayPostComponent } from './day-post.component';

describe('DayPostComponent', () => {
  let component: DayPostComponent;
  let fixture: ComponentFixture<DayPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DayPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DayPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
