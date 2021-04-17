import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GamereviewsComponent } from './gamereviews.component';

describe('GamereviewsComponent', () => {
  let component: GamereviewsComponent;
  let fixture: ComponentFixture<GamereviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GamereviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GamereviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
