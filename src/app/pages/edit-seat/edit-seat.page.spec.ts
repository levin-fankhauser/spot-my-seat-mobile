import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditSeatPage } from './edit-seat.page';

describe('EditSeatPage', () => {
  let component: EditSeatPage;
  let fixture: ComponentFixture<EditSeatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
