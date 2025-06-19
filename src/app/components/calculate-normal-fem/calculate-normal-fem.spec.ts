import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateNormalFem } from './calculate-normal-fem';

describe('CalculateNormalFem', () => {
  let component: CalculateNormalFem;
  let fixture: ComponentFixture<CalculateNormalFem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateNormalFem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateNormalFem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
