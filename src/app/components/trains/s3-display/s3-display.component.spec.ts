import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { S3DisplayComponent } from './s3-display.component';

describe('S3DisplayComponent', () => {
  let component: S3DisplayComponent;
  let fixture: ComponentFixture<S3DisplayComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [S3DisplayComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(S3DisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
