import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SeatPickerComponent } from './seat-picker.component';

describe('SeatPickerComponent', () => {
  let component: SeatPickerComponent;
  let fixture: ComponentFixture<SeatPickerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [SeatPickerComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SeatPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
