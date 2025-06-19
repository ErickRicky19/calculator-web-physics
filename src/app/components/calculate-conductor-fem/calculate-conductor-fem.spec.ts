import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateConductorFem } from './calculate-conductor-fem';

describe('CalculateConductorFem', () => {
  let component: CalculateConductorFem;
  let fixture: ComponentFixture<CalculateConductorFem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateConductorFem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateConductorFem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
