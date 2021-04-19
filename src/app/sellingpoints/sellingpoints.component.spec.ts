import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellingpointsComponent } from './sellingpoints.component';

describe('SellingpointsComponent', () => {
  let component: SellingpointsComponent;
  let fixture: ComponentFixture<SellingpointsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SellingpointsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SellingpointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
