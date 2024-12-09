import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateSeatPage } from './create-seat.page';

describe('CreateSeatPage', () => {
  let component: CreateSeatPage;
  let fixture: ComponentFixture<CreateSeatPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeatPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
